import { errorHandler, response } from '../../lib/utilApi'
import { NextApiHandler } from 'next'

/**
 * @example_url to activate this api:
 * https://<your-site.com>/api/revalidate?secret=<token>
 *
 * @DOC https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
 */
const handler: NextApiHandler = async ({ query = {} }, res) => {
  try {
    const { reval_token, path, paths } = query
    // Check for reval_token to confirm this is a valid request
    if (process.env.NEXT_PUBLIC_REVAL_TOKEN === undefined)
      throw new Error('500 No "NEXT_PUBLIC_REVAL_TOKEN" set for this operation')
    if (reval_token !== process.env.NEXT_PUBLIC_REVAL_TOKEN)
      throw new Error('401 Invalid token')

    // logger.debug({ path, paths }, 'Rebuild Path(s)')
    if (path) await res.unstable_revalidate(path as string)
    if (paths) {
      const pathArr = (paths as string).split(',')
      for (let path of pathArr as string[]) {
        await res.unstable_revalidate(path)
      }
    }
    return response(res, {
      status: 200,
      data: { revalidated: true, paths: path || paths },
      message: 'revalidated',
    })
  } catch (error: any) {
    // If there was an error, Next.js will continue to show the last successfully generated page
    errorHandler(res, error)
  }
}

export default handler
