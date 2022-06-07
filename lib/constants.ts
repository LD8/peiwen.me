import { ValueOf } from '../types'

export const DATE_FORMAT = {
  GENERAL: 'D MMM, YYYY',
  DETAILED: 'H:mm, D MMM, YYYY',
} as const

export type IDateFormat = ValueOf<typeof DATE_FORMAT>
export type IDateFormatKeys = keyof typeof DATE_FORMAT
