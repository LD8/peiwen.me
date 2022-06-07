import dayjs from 'dayjs'
import { NextApiHandler } from 'next'
import { getCollJournalExtra } from '../../../../lib/mongodb'
import { response, withErrorCatcher } from '../../../../lib/utilApi'

/**
 * API: to get or update a journal record
 * @path '/journals/:slug/comment'
 * @methods 'PATCH'
 */
const handleComment: NextApiHandler = async ({ method, query, body }, res) => {
  if (method?.toUpperCase() !== 'POST') throw new Error('400 POST only')

  const collJExtra = await getCollJournalExtra()

  try {
    body = JSON.parse(body)
    body.created_at = dayjs().format()
  } catch (error) {
    throw new Error(`400 body data can not be parsed`)
  }

  const data = await collJExtra.updateOne(
    { slug: query.slug },
    { $addToSet: { comments: body }, $inc: { comment_count: 1 } },
  )
  response(res, {
    status: 200,
    data: data as any,
    message: 'Thanks for the comment~',
  })
}

export default withErrorCatcher(handleComment)
