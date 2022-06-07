import { createModel } from 'hox'
import { useState } from 'react'

const useWorkContext = () => {
  const [isExpView, setIsExpView] = useState(false)
  const [workIndex, setWorkIndex] = useState(0)

  return { isExpView, setIsExpView, workIndex, setWorkIndex }
}
const useWorkContextModel = createModel(useWorkContext)

export default useWorkContextModel
