import { useRef, useEffect } from 'react'

type ICallBackForEach = (
  value: ResizeObserverEntry,
  index: number,
  array: ResizeObserverEntry[],
) => void

const useResizeObserver = <T extends HTMLElement = HTMLDivElement>(
  callbackfn: ICallBackForEach,
) => {
  const refObserved = useRef<T>(null)

  useEffect(() => {
    const observed = refObserved.current
    const resizeObsever = new ResizeObserver((entries) => {
      entries.forEach(callbackfn)
    })
    if (observed) resizeObsever.observe(observed)
    return () => resizeObsever.disconnect()
  }, [callbackfn])

  return refObserved
}

export default useResizeObserver
