import snatch, { isDev } from './snatch'

export type IParamsRevalidate = { path?: string; paths?: string[] }

/**
 * only rebuild the required paths in production
 *
 * @ref https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
 */
const rebuildPage = async ({
  path,
  paths,
}: IParamsRevalidate): Promise<void> => {
  // if (isDev) return
  const revalidatePath = `/revalidate?reval_token=${process.env.NEXT_PUBLIC_REVAL_TOKEN}`
  if (path) await snatch(`${revalidatePath}&path=${path}`)
  if (paths) await snatch(`${revalidatePath}&paths=${paths.join(',')}`)
}

export default rebuildPage
