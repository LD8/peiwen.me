import { useRouter } from 'next/router'
import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import ICONS from '../lib/icons'
import snatch from '../lib/snatch'
import { convDate } from '../lib/utils'
import Fieldset from './Fieldset'
import Input from './Input'
import JournalOps from './JournalOps'
import Loaders from './Loaders'
import StyledButton from './StyledButton'
import Textarea from './Textarea'

type IPCounts = Required<IPCountsFloat> & IPDate
const Counts: React.FC<IPCounts> = ({
  showDateIcon = false,
  date,
  commentable,
  counts,
  style,
  slug,
}) => {
  return (
    <>
      <Date showDateIcon={showDateIcon} date={date} style={style} />
      <ViewSpan views={counts.views} slug={slug} style={style} />
      <LikeSpan likes={counts.likes} slug={slug} style={style} />
      {commentable && (
        <StyledSpan
          style={style}
          className='hov-blue'
          onClick={() => {
            scrollTo({ top: 20000 })
            document.getElementById('comment-input')?.focus()
          }}
        >
          <ICONS.comment />
          <span>{counts.comments}</span>
        </StyledSpan>
      )}
    </>
  )
}

type IPView = { views: number; slug: string }
const ViewSpan: React.FC<IPView & IStyle> = ({ style, views, slug }) => {
  useEffect(() => {
    snatch(`/journals/${slug}/view`, { method: 'PATCH' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <StyledSpan style={style}>
      <ICONS.eye />
      <span>{views}</span>
    </StyledSpan>
  )
}
type IPLikes = { likes: number; slug: string }
const LikeSpan: React.FC<IPLikes & IStyle> = ({ likes, slug, style }) => {
  const [count, set] = useState(likes)
  const [liked, setLiked] = useState(false)
  return (
    <StyledSpan
      style={style}
      className={liked ? 'liked' : 'hov-pink'}
      onClick={() => {
        if (!liked) {
          snatch(`/journals/${slug}/like`, { method: 'PATCH' })
          set((prev) => prev + 1)
          setLiked(true)
        }
      }}
    >
      {liked ? <ICONS.liked /> : <ICONS.like />}
      <span>{count}</span>
    </StyledSpan>
  )
}

type IPDate = {
  date?: string
  showDateIcon?: boolean
  style?: React.CSSProperties
  className?: string
}
const Date: React.FC<IPDate> = ({
  date,
  className,
  showDateIcon = false,
  style,
}) => {
  return date === undefined ? null : (
    <StyledSpan style={style} className={className}>
      {showDateIcon && <ICONS.date />}
      <span>{date}</span>
    </StyledSpan>
  )
}

export const StyledSpan = styled.span`
  cursor: default;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 200ms ease-in-out;
  > span {
    font-size: var(--fontS);
    margin-left: 5px;
  }
`

type IPCountsFloat = {
  slug: string
  commentable: boolean
  counts?: {
    comments: number
    views: number
    likes: number
  }
}
const CountsFloat: React.FC<IPCountsFloat> = ({
  slug,
  commentable,
  counts,
}) => {
  const router = useRouter()
  return (
    <StyledCountsDiv>
      {counts && (
        <Counts commentable={commentable} counts={counts} slug={slug} />
      )}
      <JournalOps.Edit slug={slug} />
      <JournalOps.Delete
        slug={slug}
        afterDel={() => {
          router.push('/journals')
        }}
      />
    </StyledCountsDiv>
  )
}

const StyledCountsDiv = styled.div`
  position: fixed;
  bottom: 30vh;
  right: calc((100vw - 800px) / 4);
  gap: 14px;
  display: flex;
  flex-direction: column;
  font-size: var(--fontL);
  color: var(--color-secondary);
  margin: 20px;

  @media screen and (max-width: 1200px) {
    position: static;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    color: var(--color-dark);
    gap: 25px;
  }
`

type IPComments = {
  comments?: IComment[]
  slug: string
  refreshExtra: () => Promise<void>
}
const Comments: React.FC<IPComments> = ({ comments, slug, refreshExtra }) => {
  return (
    <StyledCommentsDiv>
      {comments?.map((comment, i) => {
        return <Comment key={i} comment={comment} />
      })}
      <CommentForm slug={slug} refreshExtra={refreshExtra} />
    </StyledCommentsDiv>
  )
}
const StyledCommentsDiv = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  gap: 20px;
  flex-flow: column;
`

const Comment: React.FC<{ comment: IComment }> = ({ comment }) => {
  return (
    <StyledCommentDiv>
      <h3 className='person'>{comment.commenter}</h3>
      <p className='markdown'>{comment.body_markdown}</p>
      <Date className='date' date={convDate(comment.created_at, 'DETAILED')} />
    </StyledCommentDiv>
  )
}

const CommentForm: React.FC<{
  slug: string
  refreshExtra: () => Promise<void>
}> = ({ slug, refreshExtra }) => {
  const [person, setP] = useState('')
  const [md, setMD] = useState('')
  const [commenting, setCommenting] = useState(false)
  return (
    <StyledCommentDiv style={{ border: 'none', padding: 0 }}>
      <Fieldset legend='Comment'>
        <Input
          className='person'
          value={person}
          placeholder='Who are you?'
          id='comment-input'
          maxLength={40}
          onChange={(e) => setP(e.currentTarget.value)}
        />
        <Textarea
          className='markdown'
          value={md}
          placeholder='Any comments?'
          rows={5}
          onChange={(e) => setMD(e.target.value)}
        />
        <StyledSubmitComment
          isActive={commenting}
          onClick={async () => {
            const data = { commenter: person, body_markdown: md }
            if (person && md) {
              setCommenting(true)
              try {
                const resData = await snatch(`/journals/${slug}/comment`, {
                  method: 'POST',
                  body: JSON.stringify(data),
                })
                if (resData) {
                  setP('')
                  setMD('')
                }
                await refreshExtra()
              } finally {
                setCommenting(false)
              }
            }
          }}
        >
          {commenting ? <Loaders.Swinger /> : 'Comment'}
        </StyledSubmitComment>
      </Fieldset>
    </StyledCommentDiv>
  )
}
const StyledSubmitComment = styled(StyledButton)`
  margin: 10px 0 0 0;
  align-self: flex-end;
  @media screen and (max-width: 700px) {
    align-self: center;
  }
`
const StyledCommentDiv = styled.div`
  padding: 18px 18px 10px 18px;
  border: 1px solid var(--color-white);
  border-radius: 16px;
  display: flex;
  flex-flow: column;
  gap: 10px;
  .person {
    font-weight: 500;
    margin: 0;
  }
  .markdown {
    width: 100%;
    margin: 0;
  }
  .date {
    align-self: flex-end;
    letter-spacing: 1px;
  }
`

type IPStatus = {
  published: boolean
  typeOf: string
  verbose?: boolean
} & IStyle
const Status: React.FC<IPStatus> = ({
  published,
  typeOf,
  verbose = false,
  style,
}) => {
  return (
    <StyledStatus style={style}>
      <div className={published ? 'dot-green' : 'dot-red'} />
      <div>{verbose ? typeOf : typeOf.slice(0, 1)}</div>
    </StyledStatus>
  )
}
const StyledStatus = styled.div`
  cursor: default;
  position: absolute;
  right: 8px;
  top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid white;
  /* background-color: rgb(235, 235, 235, 0.4); */
  font-size: var(--fontXS);
  border-radius: 5px;
  > div {
    text-transform: capitalize;
  }
`

const JournalDisplay = {
  Counts,
  Date: memo(Date),
  CountsFloat: memo(CountsFloat),
  Comments: memo(Comments),
  Status: memo(Status),
}
export default JournalDisplay
