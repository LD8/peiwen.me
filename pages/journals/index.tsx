import { AnimatePresence, motion } from 'framer-motion'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import HeadInfo from '../../components/HeadInfo'
import Input from '../../components/Input'
import JournalDisplay from '../../components/JournalDisplay'
import JournalOps from '../../components/JournalOps'
import Pagination from '../../components/Pagination'
import { cssActive, cssHovered } from '../../components/StyledButton'
import TagList from '../../components/TagList'
import QUOTES from '../../content/quotes'
import ga from '../../lib/ga'
import { useAnyInArray } from '../../lib/hooks'
import { isLi } from '../../lib/hooks/useGuard'
import useResizeObserver from '../../lib/hooks/useResizeObserver'
import logger from '../../lib/logger'
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
        ga.event('search', { search_term: searchValue })
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
      <HeadInfo
        title="Peiwen's journal"
        description='Peiwen records his ideas and study results here'
      />

      <StyledHeader>
        <StyledHeaderInput
          type='search'
          style={{ textAlign: 'center', fontSize: 'var(--fontXL)' }}
          placeholder='Journal Searcher'
          onMouseEnter={(e) => e.currentTarget.focus()}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <p style={{ fontSize: 'var(--fontS)' }}>
          {/* To record my thoughts on how to improve my work Sharing epiphanies of
          life and work */}
          {quote}
        </p>
        <JournalOps.Create />
      </StyledHeader>

      <MemoJournalSection
        // journals={filteredJournals}
        journals={Array(100).fill(initJournals?.[0])}
        afterDel={afterDel}
      />
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

  const router = useRouter()
  const [curPage, setCurPage] = useState(1)
  useEffect(() => {
    setCurPage(() =>
      !!Number(router.query.page) ? Number(router.query.page) : 1,
    )
  }, [router.query.page])

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
                  <CardJournal
                    key={journal.slug}
                    {...journal}
                    afterDel={afterDel}
                  />
                ))}
            </motion.ul>
          </AnimatePresence>
          <ul className='pagination'>
            {paginatedArray && paginatedArray.length > 1 && (
              <Pagination pageCount={paginatedArray.length} curPage={curPage} />
            )}
          </ul>
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
    <StyledJournalLi onClick={() => router.push(`/journals/${slug}`)}>
      <div className='title-block'>
        <h3>
          <Link href={`/journals/${slug}`}>
            <a onClick={(e) => e.stopPropagation()}>{title}</a>
          </Link>
        </h3>
        <p>{summary}</p>
        <TagList tagList={tag_list} />
      </div>
      <div className='extra-info'>
        <JournalDisplay.Date date={convDate(created_at)} />
        <JournalOps.Edit slug={slug} />
        <JournalOps.Delete slug={slug} afterDel={afterDel} />
      </div>
      <JournalDisplay.Status published={published} typeOf={type_of} />
    </StyledJournalLi>
  )
}
const StyledJournalLi = styled.li`
  position: relative;
  cursor: pointer;
  flex: 1 0 350px;
  min-width: 40%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  display: flex;
  flex-flow: column;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    ${cssHovered}
  }
  :active {
    ${cssActive}
  }

  .title-block {
    flex: 1;
    h3 {
      width: 95%;
      /* margin-bottom: 10px; */
    }
    p {
      text-align: justify;
      font-size: var(--fontS);
      line-height: unset;
      /* margin-bottom: 10px; */
    }
  }

  .extra-info {
    font-size: var(--fontS);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }
`
