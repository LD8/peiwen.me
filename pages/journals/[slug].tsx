import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { StyledHeader } from '.'
import BadgeList from '../../components/BadgeList'
import HeadInfo from '../../components/HeadInfo'
import JournalDisplay from '../../components/JournalDisplay'
import Markdown from '../../components/Markdown'
import PageNotFound from '../../components/PageNotFound'
import ga from '../../lib/ga'
import logger from '../../lib/logger'
import snatch from '../../lib/snatch'
import { convDate } from '../../lib/utils'
import { getJournals } from '../api/journals'
import { getJournal } from '../api/journals/[slug]'

type GSP = GetStaticProps<TSGetJournal, { slug: string }>
export const getStaticProps: GSP = async (context) => {
  try {
    return { props: await getJournal(context.params?.slug) }
  } catch (error) {
    logger.nodeDev(error)
    return { props: { journal: undefined } }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { journals } = await getJournals()
  const paths = journals?.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: 'blocking' }
}

const JournalDetails: NextPage<TSGetJournal> = ({ journal }) => {
  const [extra, setExtra] = useState<IJournalExtra>()
  const getExtra = useCallback(
    async () =>
      journal &&
      (await snatch(`/journals/${journal.slug}/extra`).then((res) =>
        setExtra(res),
      )),
    [journal],
  )
  useEffect(() => void getExtra(), [getExtra])

  const counts = useMemo(() => {
    if (!extra) return undefined
    const { comment_count, view_count, like_count } = extra
    return { comments: comment_count, views: view_count, likes: like_count }
  }, [extra])

  // Log specific journal view
  useEffect(() => ga.event('view_item', { journal_title: journal?.title }), [])

  if (!journal) return <PageNotFound />

  const {
    type_of,
    title,
    slug,
    summary,
    published,
    commentable,
    created_at,
    tag_list,
    body_markdown,
  } = journal
  return (
    <div style={{ maxWidth: '800px' }} className='full-flex'>
      <HeadInfo
        title={`Journal - ${title}`}
        description={summary}
        path={`/journals/${slug}`}
      />

      <StyledArticle>
        <StyledHeader style={{ marginBottom: '20px' }}>
          <h1>{title}</h1>
          <BadgeList badgeList={tag_list} />
          <p style={{ textAlign: 'justify' }}>
            <em>Summary -</em> {summary}
          </p>
          <JournalDisplay.Status
            published={published}
            typeOf={type_of}
            verbose
            style={{
              position: 'relative',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              border: 'none',
              gap: '5px',
            }}
          />
        </StyledHeader>
        <Markdown data={body_markdown} />
        <div className='date'>
          <JournalDisplay.Date date={convDate(created_at, 'DETAILED')} />
        </div>
      </StyledArticle>

      <JournalDisplay.CountsFloat
        slug={slug}
        commentable={commentable}
        counts={counts}
      />

      {commentable && (
        <JournalDisplay.Comments
          slug={slug}
          comments={extra?.comments}
          refreshExtra={getExtra}
        />
      )}
    </div>
  )
}

export default JournalDetails

const StyledArticle = styled.article`
  width: 100%;
  .date {
    letter-spacing: 0.1em;
    font-size: 14px;
    > span {
      justify-content: flex-end;
    }
  }
`
