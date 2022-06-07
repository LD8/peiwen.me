import { NextPage } from 'next'
import HeadInfo from '../../components/HeadInfo'
import JournalEditor from '../../components/JournalEditor'
import useGuard from '../../lib/hooks/useGuard'

const JournalCreate: NextPage = () => {
  useGuard()
  return (
    <>
      <HeadInfo title='Peiwen is composing a journal' />
      <JournalEditor />
    </>
  )
}

export default JournalCreate
