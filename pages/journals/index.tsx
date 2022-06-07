import { AnimatePresence, motion } from 'framer-motion'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import BadgeList from '../../components/BadgeList'
import HeadInfo from '../../components/HeadInfo'
import Input from '../../components/Input'
import JournalDisplay from '../../components/JournalDisplay'
import JournalOps from '../../components/JournalOps'
import Pagination from '../../components/Pagination'
import { StyledFlatButton } from '../../components/StyledDiv'
import QUOTES from '../../content/quotes'
import { useAnyInArray } from '../../lib/hooks'
import { isLi } from '../../lib/hooks/useGuard'
import useResizeObserver from '../../lib/hooks/useResizeObserver'
import logger from '../../lib/logger'
import useJournalContextModel from '../../lib/models/useJournalContext'
import { chunkArray, convDate } from '../../lib/utils'
import { getJournals } from '../api/journals'

export const getStaticProps: GetStaticProps<TSGetJournals> = async () => {
  return { props: await getJournals() }
}

const authJournals = (journals: IJournal[]) =>
  isLi() ? journals : journals.filter(({ published }) => published)

const Journals: NextPage<TSGetJournals> = ({ journals: initJournals }) => {
  const quote = useAnyInArray(QUOTES)
  const router = useRouter()
  useEffect(() => {
    router.prefetch(`/journals/${initJournals[0]?.slug}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [filteredJournals, setFilteredJournals] = useState<IJournal[]>()
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    // NOTE: also init the journal data on the very first render
    if (!searchValue) return setFilteredJournals(authJournals(initJournals))
    const timer = setTimeout(() => {
      setFilteredJournals((prev) => {
        const filtered = prev?.filter((journal) =>
          `${journal.summary} ${journal.title} ${journal.tag_list.join(' ')}`
            .toLowerCase()
            .includes(searchValue.toLowerCase()),
        )
        logger.dev({ filtered, searchValue })
        return filtered
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [searchValue, initJournals])

  const afterDel = useCallback(
    (deletedSlug: string) =>
      setFilteredJournals(
        initJournals.filter(({ slug }) => slug !== deletedSlug),
      ),
    [initJournals],
  )
  return (
    <div style={{ maxWidth: '1200px' }} className='full-flex'>
      <HeadInfo title="Peiwen's journal" />

      <StyledHeader>
        <StyledHeaderInput
          type='search'
          style={{ textAlign: 'center', fontSize: 'var(--fontXL)' }}
          placeholder='Journal Searcher'
          onMouseEnter={(e) => e.currentTarget.focus()}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <p>
          {/* To record my thoughts on how to improve my work Sharing epiphanies of
        life and work */}
          {quote}
        </p>
        <JournalOps.Create />
      </StyledHeader>

      <MemoJournalSection journals={filteredJournals} afterDel={afterDel} />
    </div>
  )
}

export default Journals

export const StyledHeader = styled.header`
  position: relative;
  margin: 0 0 30px 0;
  text-align: center;
  h1 {
    width: 95%;
    margin: 0 auto 20px auto;
    font-size: var(--fontXL);
    text-transform: capitalize;
    @media screen and (max-width: 700px) {
      font-size: var(--fontL);
    }
  }
  ul {
    margin-bottom: 20px;
  }
  p {
    line-height: 1.5rem;
    text-indent: 3em;
  }
`
const StyledHeaderInput = styled(Input)`
  font-size: var(--fontXL);
  width: 100%;
  margin-bottom: 10px;
`

type IPJournalSection = {
  journals?: IJournal[]
  afterDel: (slug: string) => void
}
const JournalSection: React.FC<IPJournalSection> = ({
  journals: filteredJournals,
  afterDel,
}) => {
  const [journalPerPage, setJournalPerPage] = useState(6)
  const [paginatedArray, setPaginatedArray] = useState<IJournal[][]>()
  const { curPage, setCurPage } = useJournalContextModel((m) => [m.curPage])
  const refSec = useResizeObserver(({ contentRect: { width, height } }) => {
    // NOTE: recalc journal per page on section resize
    if (width > 900 && height > 600) {
      const num = Math.round(height / 110)
      const jpp = num - (num % 2)
      // console.log({ width, height, num, jpp })
      setJournalPerPage(jpp)
    }
  })

  useEffect(() => {
    if (filteredJournals?.length)
      setPaginatedArray(chunkArray(filteredJournals, journalPerPage))
  }, [filteredJournals, journalPerPage])

  const [right, setRight] = useState(true)
  const setCurrentPage = useCallback(
    (num: number) => {
      queueMicrotask(() => setRight(num > curPage))
      setTimeout(() => setCurPage(num))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [curPage],
  )
  return (
    <StyledJournalSection id='section-journal' ref={refSec}>
      {filteredJournals?.length ? (
        <>
          <AnimatePresence initial={false} exitBeforeEnter>
            <motion.ul
              key={curPage}
              className='journal-list'
              initial={{ opacity: 0, x: right ? 10 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: right ? -10 : 10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredJournals.length &&
                paginatedArray &&
                paginatedArray[curPage - 1]?.map((journal) => (
                  <MemoCardJournal
                    key={journal.slug}
                    {...journal}
                    afterDel={afterDel}
                  />
                ))}
            </motion.ul>
          </AnimatePresence>
          <div className='pagination'>
            {paginatedArray && paginatedArray.length > 1 && (
              <Pagination
                pageCount={paginatedArray.length}
                curPage={curPage}
                setCurPage={setCurrentPage}
              />
            )}
          </div>
        </>
      ) : (
        <h2 style={{ textAlign: 'center' }}>Nothing found...</h2>
      )}
    </StyledJournalSection>
  )
}
const MemoJournalSection = memo(JournalSection)
const StyledJournalSection = styled.section`
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 30px;
  padding: 0 40px;
  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 1000px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 700px) {
    padding: 0;
  }

  > .journal-list {
    flex: 1;
  }
  > .journal-list,
  > .pagination {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 20px;
  }
`
const CardJournal: React.FC<
  IJournal & { afterDel: (slug: string) => void }
> = ({
  type_of,
  title,
  slug,
  summary,
  published,
  created_at,
  tag_list,
  afterDel,
}) => {
  const router = useRouter()
  return (
    <StyledCard as='li' onClick={() => router.push(`/journals/${slug}`)}>
      <div className='title-block'>
        <JournalDisplay.Status published={published} typeOf={type_of} />
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
      <BadgeList badgeList={tag_list} />
      <div className='extra-info'>
        <JournalDisplay.Date date={convDate(created_at)} />
        <JournalOps.Edit slug={slug} />
        <JournalOps.Delete slug={slug} afterDel={afterDel} />
      </div>
    </StyledCard>
  )
}
const MemoCardJournal = memo(CardJournal)
const StyledCard = styled(StyledFlatButton)`
  position: relative;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  min-width: unset;
  min-width: 40%;
  background-color: transparent;
  border: 0.5px solid transparent;
  flex: 1 0 350px;
  height: unset;
  letter-spacing: unset;
  @media screen and (max-width: 800px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;

  > .title-block {
    h3 {
      width: 95%;
      margin-bottom: 10px;
    }
    p {
      text-align: justify;
      font-size: var(--fontS);
      line-height: unset;
      margin-bottom: 10px;
    }
  }
  > ul {
    flex: 1;
    justify-content: flex-start;
  }
  > .extra-info {
    font-size: var(--fontS);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }
`
