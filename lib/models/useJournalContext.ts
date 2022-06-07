import { createModel } from 'hox'
import { useState } from 'react'

const useJournalContext = () => {
  const [curPage, setCurPage] = useState(1)

  return { curPage, setCurPage }
}
const useJournalContextModel = createModel(useJournalContext)

export default useJournalContextModel
