import dayjs from 'dayjs'
import { DATE_FORMAT, IDateFormatKeys } from './constants'

/**
 * To generate a number ranging -> (0, within)
 * @param within number
 */
export const getRandomDigit = (within: number): number =>
  Number(Math.floor(Math.random() * within).toFixed(0))

/**
 * To generate a positive or negative number ranging -> (-within, within)
 */
export const getRandomPNDigit = (within: number): number =>
  Math.random() > 0.5
    ? Number(Math.floor(Math.random() * within).toFixed(0))
    : -Number(Math.floor(Math.random() * within).toFixed(0))

/**
 * see if an Array or a string contains v
 */
export function contain(obj: any, v: string) {
  if (Array.isArray(obj)) {
    // when obj is <tags>[]
    return obj.some((s) => s.toLowerCase().includes(v))
  }
  // otherwise obj is a string
  return obj.toLowerCase().includes(v)
}

export const capitalize = (text: string) =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`

export function debounce<F extends (...args: any[]) => any>(fn: F, wait = 300) {
  let timer: NodeJS.Timeout | null = null
  return function (this: ThisType<any> | void, ...args: Parameters<F>) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait)
  }
}

/**
 * Convert date
 *
 * @param datetime format: "YYYY-MM-DDTHH:mm" e.g. "2022-05-04T11:40"
 * @param formatKey IDateFormatKeys
 */
export const convDate = (
  datetime: string,
  formatKey: IDateFormatKeys = 'GENERAL',
) => {
  const result = dayjs(datetime).format(DATE_FORMAT[formatKey])
  return result
}

export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  return arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr]
}
