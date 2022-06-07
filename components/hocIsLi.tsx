import { ComponentType, FC } from 'react'
import { useIsLi } from '../lib/hooks/useGuard'

const hocIsLi = <P extends {} = any>(Component: ComponentType<P>): FC<P> => {
  return function HigherOrderFunctionComponent(props) {
    const isLi = useIsLi()
    return isLi ? <Component {...props} /> : null
  }
}

export default hocIsLi
