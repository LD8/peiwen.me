import { NextApiHandler, NextApiResponse } from 'next'
import { IObject } from '../types'
import { TRes } from '../types/api'

/**
 * __To generate response__
 * @param res
 * @param result { status: number; data: TData | null; message?: string }
 *
 * @ref https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export const response = <TData extends IObject | null = any>(
  res: NextApiResponse<TRes<TData>>,
  result: { status: number; data: TData | null; message?: string },
): void => {
  let { status, data, message } = result
  let code: number = status * 100
  if (message === undefined) {
    switch (status) {
      case 200:
        message = 'Success'
        break
      case 400:
        message = 'Request Error'
        break
      case 401:
        message = 'Invalid token'
        break
      case 500:
        message = 'Internal Server Error'
        break
      default:
        message = 'Unknown Error'
        break
    }
  }
  res.status(status).json({ code, message, data })
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
 */
export const resTeapot = (res: NextApiResponse<TRes<null>>) =>
  response(res, { status: 418, data: null, message: "I'm a teapot" })

export const errorHandler = (
  res: NextApiResponse,
  error: { message: string },
) => {
  let status: number = Number(error?.message?.slice(0, 3))
  if (!status || isNaN(status)) status = 500
  let message: string = error?.message?.slice(4) || 'Internal unknown error'
  response(res, { status, data: null, message })
}

export const withErrorCatcher = (fn: NextApiHandler): NextApiHandler => {
  return async (req, res) => {
    try {
      await fn(req, res)
    } catch (error: any) {
      errorHandler(res, error)
    }
  }
}
