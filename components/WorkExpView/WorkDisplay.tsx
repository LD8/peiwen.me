import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import styled, { css } from 'styled-components'
import { IWork } from '../../lib/getWorkData'
import ExternalLink from '../ExternalLink'
import { base, cBase, cssActive, darken } from '../StyledDiv'
import TagList from '../TagList'
import {
  cssWorkCardContent,
  WorkVisitInstruction,
} from '../WorkListView/WorkListItem'

const boxShadowFrame = css`
  box-shadow:
    /* br square */ 10px 20px 0 0 ${cBase},
    /* br shadow */ 10px 20px 25px 5px ${darken(base, 0.2)},
    /* tl square */ inset 10px 20px 0 0 ${darken(base, 0.5)},
    /* br square */ inset -10px -20px 0 0 rgb(243, 242, 238);
`
const boxShadowFrameHover = css`
  box-shadow:
    /* br square */ 20px 30px 0 0 ${cBase},
    /* br shadow */ 20px 30px 20px 0 ${cBase},
    /* tl square */ inset 10px 20px 0 0 ${darken(base, 0.5)},
    /* br square */ inset -10px -10px 0 0 rgb(243, 242, 238);
`

const WorkDisplay: React.FC<
  IWork & { hovering: boolean; index: number; right: boolean }
> = ({
  slug,
  title,
  imgSrcArr,
  badges,
  summary,
  endedAt,
  links,
  hovering,
  index,
  right,
}) => {
  const router = useRouter()
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <StyledMotionDiv
        key={index}
        initial={{ opacity: 0, x: right ? 10 : -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: right ? -10 : 10 }}
        transition={{ duration: 0.3 }}
      >
        <StyledWorkDisplay onClick={() => router.push(`/work-and-joy/${slug}`)}>
          <StyledDivFrame hovering={hovering} imgUrl={imgSrcArr[0]} />
          <AnimatePresence>
            {hovering && (
              <motion.div
                className='div-mask'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {hovering && (
              <motion.div
                className='div-content'
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, type: 'tween' },
                }}
                exit={{ opacity: 0, y: 100 }}
              >
                <h2>
                  {links?.online ? (
                    <ExternalLink href={links.online}>{title}</ExternalLink>
                  ) : (
                    title
                  )}
                </h2>
                <TagList tagList={badges} />
                <p>{summary}</p>
                <p>{endedAt}</p>
                <WorkVisitInstruction href={links?.online} />
              </motion.div>
            )}
          </AnimatePresence>
        </StyledWorkDisplay>
      </StyledMotionDiv>
    </AnimatePresence>
  )
}

export default WorkDisplay

const cssSharedBorderR = css`
  border-radius: 30% 12%;
`
const cssSharedPosition = css`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`
const StyledMotionDiv = styled(motion.div)`
  max-width: 50vw;
  width: 100%;
  @media screen and (min-width: 1800px) {
    max-width: 60vw;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledWorkDisplay = styled.div`
  flex: 1;
  transition: all 600ms ease-in-out;
  position: relative;
  cursor: pointer;
  aspect-ratio: 3 / 2;

  .div-mask {
    ${cssSharedPosition}
    ${cssSharedBorderR}
    background-color: #000000aa;
  }

  .div-content {
    ${cssSharedPosition}
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5vh 5vh 10vh 5vh;
    @media screen and (max-width: 1000px) {
      padding: 5vh;
    }

    ${cssWorkCardContent}
  }

  :active {
    .div-frame {
      filter: none;
      ${cssActive}
    }
  }
`
const StyledDivFrame = styled.div<{
  imgUrl: string
  hovering: boolean
}>`
  ${cssSharedPosition}
  ${boxShadowFrame}
  transition: all 600ms ease-in-out;
  background-image: ${({ imgUrl }) => imgUrl && `url(${imgUrl})`};
  background-position: top;
  border-radius: 0% 50% / 50% 0%;
  /* border-radius: 50% 0% / 0% 50%; */

  ${({ hovering }) =>
    hovering &&
    css`
      ${boxShadowFrameHover}
      ${cssSharedBorderR}
      background-position: bottom;
      /* filter: sepia(50%); */
    `}
`
