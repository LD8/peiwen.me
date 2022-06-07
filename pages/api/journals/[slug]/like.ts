import { NextApiHandler } from 'next'
import { getCollJournalExtra } from '../../../../lib/mongodb'
import { response, withErrorCatcher } from '../../../../lib/utilApi'

/**
 * API: to get or update a journal record
 * @path '/journals/:slug'
 * @methods 'PATCH'
 */
const handleLike: NextApiHandler = async ({ method, query }, res) => {
  if (method?.toUpperCase() !== 'PATCH')
    throw new Error('400 PATCH only for "/like" api')

  const collJExtra = await getCollJournalExtra()
  const data = await collJExtra.updateOne(
    { slug: query.slug },
    { $inc: { like_count: 1 } },
  )
  response(res, { status: 200, data: null, message: 'liked' })
}

export default withErrorCatcher(handleLike)
