import logger from './logger'
import toast from 'react-hot-toast'

const EP_LOCAL = 'http://localhost:3000'
const EP_PROD = 'https://www.peiwen.me'
export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'
export const EP = isDev ? EP_LOCAL : EP_PROD

export default async function snatch<T extends Record<string, unknown> = any>(
  path: RequestInfo | URL,
  options?: RequestInit | undefined,
): Promise<T | null> {
  const result: Response = await fetch(`${EP}/api${path}`, options)
  const { data, code, message } = await result.json()
  if (!result.ok) {
    if (message) toast.error(message)
    logger.debug(
      `Code: ${code} on "/api${path}"; Message: ${message}`,
      'SNATCH LOG',
      false,
      'error',
    )
    return null
  }
  if (message) toast.success(message)
  return data
}
