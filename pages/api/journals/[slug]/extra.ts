import { getCollJournalExtra } from '../../../../lib/mongodb'
import { response, withErrorCatcher } from '../../../../lib/utilApi'
import { NextApiHandler } from 'next'

/**
 * API: to get or update a journal record
 * @path '/journals/:slug'/extra
 * @methods 'PATCH'
 */
const handleGetJournalExtra: NextApiHandler = async ({ method, query }, res) => {
  if (method?.toUpperCase() !== 'GET') throw new Error('400 GET only')

  const collJExtra = await getCollJournalExtra()
  const data = await collJExtra.findOne(
    { slug: query.slug },
    { projection: { _id: 0 } },
  )
  if (!data)
    throw new Error(
      `404 No journal extra with slug <${query.slug}> was found...`,
    )
  response(res, { status: 200, data, message: '' })
}

export default withErrorCatcher(handleGetJournalExtra)
