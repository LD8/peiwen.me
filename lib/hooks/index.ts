import { useHover } from 'ahooks'
import { RefObject, useEffect, useRef, useState } from 'react'
import { getRandomDigit } from '../utils'

export const useRandomNumber4SSR = (numberWithin: number, initNumber = 0) => {
  const [n, setN] = useState(initNumber)
  useEffect(() => setN(getRandomDigit(numberWithin)), [numberWithin])
  return n
}

export const useAnyInArray = <T>(arr: readonly T[]) => {
  const n = useRandomNumber4SSR(arr.length)
  return arr[n]
}

export const useHoverRef = <T extends Element = any>(): [
  boolean,
  RefObject<T>,
] => {
  const ref = useRef<T>(null)
  const hovering = useHover(ref)
  return [hovering, ref]
}

/**
 * exp only
 */
export const useScrollThreshold = (threshold = 30) => {
  const ref = useRef<HTMLDivElement>(null)
  const [reached, setReached] = useState(false)
  const refScrollDiff = useRef(0)
  const refLastScrollTop = useRef(0)

  useEffect(() => {
    const handler = function (this: HTMLDivElement) {
      refScrollDiff.current = this.scrollTop - refLastScrollTop.current
      refLastScrollTop.current = this.scrollTop
      if (!reached && refScrollDiff.current > threshold) {
        setReached(true)
        refScrollDiff.current = 0
      }
      if ((reached && refScrollDiff.current < -threshold) || !this.scrollTop) {
        setReached(false)
        refScrollDiff.current = 0
      }
    }

    const div = ref.current
    div?.addEventListener<'scroll'>('scroll', handler)
    return () => div?.removeEventListener('scroll', handler)
  }, [reached, threshold])

  return { ref, reached }
}
