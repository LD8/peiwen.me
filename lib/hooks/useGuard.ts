import { useEffect, useState } from 'react'

export const isLi = (): boolean =>
  localStorage?.getItem('pass_token') === process.env.NEXT_PUBLIC_PASS_TOKEN
export const oli = () => localStorage.removeItem('pass_token')

const pathGuardian = () => (isLi() ? undefined : window?.location.replace('/'))

const useGuard = () => useEffect(() => pathGuardian(), [])
export default useGuard

export const useIsLi = (): boolean => {
  const [bool, set] = useState(false)
  useEffect(() => set(isLi()), [])
  return bool
}
