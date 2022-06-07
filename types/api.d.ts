import { NextApiRequest, NextApiResponse } from 'next'
import { IObject } from '.'

/**
 * generic restful response data
 */
interface TRes<TData extends IObject | null = any> {
  code: number
  data: TData | null
  message: string
}
