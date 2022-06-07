import { errorHandler, response } from '../../lib/utilApi'
import { NextApiHandler } from 'next'

export type TSLi = { pass_token: string }
const li: NextApiHandler = (req, res) => {
  try {
    if (!process.env.NEXT_PUBLIC_PASS_TOKEN)
      throw new Error('500 No "PASS_TOKEN" detected!')

    if (req.method !== 'POST') throw new Error('400 POST method only!')

    if (!req.body) throw new Error('400 No request body!')

    if (JSON.parse(req.body) !== process.env.PASS)
      throw new Error('401 You are not Peiwen Li! Faaack off~ 🌈')

    response<TSLi>(res, {
      status: 200,
      data: { pass_token: process.env.NEXT_PUBLIC_PASS_TOKEN },
      message: 'Awesome! Peiwen is back 😏🌈🚀',
    })
  } catch (error: any) {
    errorHandler(res, error)
  }
}

export default li
