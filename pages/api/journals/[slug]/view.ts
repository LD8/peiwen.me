import { NextApiHandler } from 'next'
import { getCollJournalExtra } from '../../../../lib/mongodb'
import { response, withErrorCatcher } from '../../../../lib/utilApi'

/**
 * API: to get or update a journal record
 * @path '/journals/:slug'
 * @methods 'PATCH'
 */
const handleView: NextApiHandler = async ({ method, query }, res) => {
  if (method?.toUpperCase() !== 'PATCH') throw new Error('400 PATCH only')

  const collJExtra = await getCollJournalExtra()
  await collJExtra.updateOne({ slug: query.slug }, { $inc: { view_count: 1 } })
  response(res, { status: 200, data: null, message: '' })
}

export default withErrorCatcher(handleView)
