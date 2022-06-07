/* eslint-disable react-hooks/exhaustive-deps */
import { GetServerSideProps, NextPage } from 'next'
import HeadInfo from '../../../components/HeadInfo'
import JournalEditor from '../../../components/JournalEditor'
import useGuard from '../../../lib/hooks/useGuard'
import snatch from '../../../lib/snatch'

export const getServerSideProps: GetServerSideProps<
  TSGetJournal,
  { slug: string }
> = async (context) => {
  const slug = context.params?.slug
  if (!slug)
    throw new Error(
      `500 No param->slug was provided for <fn: getServerSideProps> in <comp: JournalEdit>...`,
    )
  const data = await snatch<TSGetJournal>(`/journals/${slug}`)
  return { props: data || { journal: undefined } }
}

const JournalEdit: NextPage<TSGetJournal> = ({ journal }) => {
  useGuard()
  return (
    <>
      <HeadInfo title='Edit a journal' />
      <JournalEditor journal={journal} />
    </>
  )
}

export default JournalEdit
