export default function empowerSetState<T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
) {
  return (obj: Partial<T> | ((prevObj: T) => Partial<T>)) => {
    if (typeof obj === 'function') {
      setState((prev) => ({ ...prev, ...obj(prev) }))
    } else {
      setState((prev) => ({ ...prev, ...obj }))
    }
  }
}
