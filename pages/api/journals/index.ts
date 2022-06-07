import dayjs from 'dayjs'
import { NextApiHandler } from 'next'
import logger from '../../../lib/logger'
import { getCollJournal, getCollJournalExtra } from '../../../lib/mongodb'
import rebuildPage from '../../../lib/rebuildPage'
import { errorHandler, response, resTeapot } from '../../../lib/utilApi'

export const getJournals = async (): Promise<TSGetJournals> => {
  const collJournal = await getCollJournal()
  const journals = await collJournal
    .find()
    .project<IJournal>({ body_markdown: 0, _id: 0 })
    .sort({ featured: -1, created_at: -1 })
    .toArray()
  logger.nodeDev(`${journals.length} journals found`)
  return { journals }
}

/**
 * API: to get all journal records and create a journal record
 * @path '/journals'
 * @methods 'POST' | 'GET'
 */
const handler: NextApiHandler = async (req, res) => {
  try {
    let { method = 'GET', body } = req
    method = method.toUpperCase()

    switch (method) {
      case 'GET': {
        const { journals } = await getJournals()
        response<TSGetJournals>(res, { status: 200, data: { journals } })
        break
      }
      case 'POST': {
        // create a journal
        const collJournal = await getCollJournal()
        const collJExtra = await getCollJournalExtra()
        body = JSON.parse(body)
        body = await validate(body)
        const resJournal = await collJournal.insertOne(body)
        const resJExtra = await collJExtra.insertOne({
          slug: body.slug,
          comment_count: 0,
          comments: [],
          view_count: 0,
          like_count: 0,
        })
        logger.nodeDev(`A journal was inserted <_id: ${resJournal.insertedId}>`)
        logger.nodeDev(
          `A journalExtra was inserted <_id: ${resJExtra.insertedId}>`,
        )

        await rebuildPage({ path: '/journals' })
        response<TSPostJournal>(res, {
          status: 200,
          data: { slug: body.slug },
          message: 'Journal successfully created',
        })
        break

        async function validate(body: TQPostJournal): Promise<IJournal> {
          const { title, slug, summary, body_markdown } = body
          if (!title || !slug || !summary || !body_markdown)
            throw new Error(`400 Creating journal with insufficient body data`)

          const journalWithTheSameSlug = await collJournal.findOne({ slug })
          if (journalWithTheSameSlug)
            throw new Error(`400 Journal slug: "${slug}" already exists...`)
          return { ...body, updated_at: dayjs().format() }
        }
      }
      default: {
        // PATCH | PUT | DELETE
        resTeapot(res)
      }
    }
  } catch (error: any) {
    errorHandler(res, error)
  }
}

export default handler
