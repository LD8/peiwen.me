import dayjs from 'dayjs'
import { NextApiHandler } from 'next'
import logger from '../../../../lib/logger'
import { getCollJournal } from '../../../../lib/mongodb'
import rebuildPage from '../../../../lib/rebuildPage'
import { errorHandler, response, resTeapot } from '../../../../lib/utilApi'

export const getJournal = async (slug?: string): Promise<TSGetJournal> => {
  if (!slug)
    throw new Error(
      `500 No "param->slug" was provided for <fn: getStaticProps> in <comp: JournalDetails>...`,
    )
  const collJournal = await getCollJournal()
  const journal = await collJournal.findOne(
    { slug },
    { projection: { _id: 0 } },
  )
  if (!journal)
    throw new Error(`404 No journal with slug <${slug}> was found...`)
  return { journal }
}

/**
 * API: to get or update a journal record
 * @path '/journals/:slug'
 * @methods 'PATCH' | 'DELETE' | 'GET'
 */
const handler: NextApiHandler = async (req, res) => {
  try {
    let { method = 'GET', query, body } = req
    method = method.toUpperCase()
    const collJournal = await getCollJournal()

    switch (method) {
      case 'GET': {
        const { journal } = await getJournal(query.slug as string | undefined)
        response<TSGetJournal>(res, { status: 200, data: { journal } })
        break
      }
      case 'PATCH': {
        const { slug } = query
        body = JSON.parse(body)
        body = await validate(body)
        const result = await collJournal.updateOne({ slug }, { $set: body })
        logger.nodeDev(`${result.modifiedCount} document was updated`)
        await rebuildPage({ paths: ['/journals', `/journals/${slug}`] })

        response<TSUpdateJournal>(res, {
          status: 200,
          data: { slug: body.slug },
          message: `Journal ${slug} has been updated`,
        })
        break

        async function validate(body: TQPostJournal): Promise<IJournal> {
          const { title, slug, summary, body_markdown } = body
          if (!title || !slug || !summary || !body_markdown)
            throw new Error(`400 Updating journal with insufficient body data`)
          return { ...body, updated_at: dayjs().format() }
        }
      }
      case 'DELETE': {
        const { slug } = query
        const result = await collJournal.deleteOne({ slug })
        if (result.deletedCount === 1) {
          await rebuildPage({ path: '/journals' })
          response<TSDeleteJournal>(res, {
            status: 200,
            data: { slug: slug as string },
            message: `Journal ${slug} has been deleted`,
          })
        } else {
          throw new Error(`404 Journal not found with slug: ${slug}`)
        }
        break
      }
      default: {
        // POST | PUT
        resTeapot(res)
        break
      }
    }
  } catch (error: any) {
    errorHandler(res, error)
  }
}

export default handler
