import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styled, { css } from 'styled-components'
import { useHoverRef } from '../../lib/hooks'
import { IWork } from '../../lib/getWorkData'
import BadgeList from '../BadgeList'
import ExternalLink from '../ExternalLink'

const WorkListItem: React.FC<IWork> = ({
  slug,
  title,
  links,
  imgSrcArr,
  badges,
  summary,
  endedAt,
}) => {
  const router = useRouter()
  const [hovering, refLi] = useHoverRef()

  return (
    <SWorkLi
      key={slug}
      onClick={() => router.push(`/work-and-joy/${slug}`)}
      ref={refLi}
    >
      <div className='liContainer'>
        <SBG hovering={hovering} className='background'>
          <Image src={imgSrcArr[0]} width='840' height='560' alt={title} />
        </SBG>
        <div className='mask' />
        <AnimatePresence>
          {hovering && (
            <motion.div
              className='content'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              exit={{ opacity: 0, y: 50, transition: { duration: 0.2 } }}
            >
              <h2>
                {links?.online ? (
                  <ExternalLink href={links.online}>{title}</ExternalLink>
                ) : (
                  title
                )}
              </h2>
              <BadgeList badgeList={badges} />
              <p>{summary}</p>
              <p>{endedAt}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SWorkLi>
  )
}

export default WorkListItem

export const cssWorkCardContent = css`
  > h2 {
    color: var(--color-light);
    margin-bottom: 15px;
    transition: color 200ms ease-in-out;
    a {
      color: var(--color-light);
      text-decoration: underline;
      text-underline-offset: 3px;
      :hover {
        color: orangered;
      }
    }
  }
  > p {
    color: var(--color-lighter);
    margin: unset;
    margin-top: 15px;
    font-weight: 500;
    font-size: var(--fontM);
  }
`

const radius = 20
const SWorkLi = styled(motion.li)`
  /* NOTE: can NOT scale ↑ motion elements */
  position: relative;
  cursor: pointer;
  aspect-ratio: 3 / 2;
  width: 100%;
  max-width: 500px;
  max-height: 367px;
  height: unset;
  @media screen and (max-width: 1200px) {
    max-width: 400px;
  }
  @media screen and (max-width: 868px) {
    max-width: 500px;
  }

  /* NOTE: essential container to achieve scaling effect */
  .liContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${radius}px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    transition: all 400ms ease-in-out 200ms;
    overflow: hidden; // NOTE: essential to clip image blur
    :hover {
      transform: scale(0.98);
      box-shadow: unset;
    }

    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .content {
      position: absolute;
      display: flex;
      flex-flow: column;
      align-items: center;
      text-align: center;
      padding: 20px;

      ${cssWorkCardContent}
    }
  }
`
const SBG = styled.div<{ hovering: boolean }>`
  display: flex;
  img {
    border-radius: ${radius}px;
    transition: all 200ms ease-in-out;
    ${({ hovering = false }) =>
      hovering &&
      css`
        filter: blur(5px) sepia(20%) brightness(35%);
        transform: scale(1.1);
      `};
  }
`
