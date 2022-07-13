import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled, { css } from 'styled-components'
import { IMG_WORK } from '../../content/IMAGES'
import { IWork } from '../../lib/getWorkData'
import { useHoverRef } from '../../lib/hooks'
import BadgeList from '../BadgeList'
import ExternalLink from '../ExternalLink'
import TagList from '../TagList'

// const workImgW = 840
// const workImgH = 560
const WorkListItem: React.FC<IWork> = ({
  slug,
  title,
  links,
  imgSrcArr,
  badges,
  summary,
  endedAt,
}) => {
  const [hovering, refLi] = useHoverRef()

  return (
    <SWorkLi key={slug} ref={refLi}>
      <Link href={`/work-and-joy/${slug}`}>
        <a className='linkContainer'>
          <SBG hovering={hovering} className='background'>
            {IMG_WORK[slug]?.[0] && (
              <Image
                src={IMG_WORK[slug][0]}
                alt={title}
                // placeholder='blur'
                // blurDataURL={genShimmerDataUrl(workImgW, workImgH)}
                // width={workImgW}
                // height={workImgH}
              />
            )}
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
                <h2>{title}</h2>
                <TagList tagList={badges} />
                <p>{summary}</p>
                <p>{endedAt}</p>
                <p className='instruction'>
                  Click anywhere to see details
                  {links?.online ? (
                    <>
                      <span> plus </span>
                      <button onClick={() => window.open(links.online)}>
                        visit site
                      </button>
                    </>
                  ) : (
                    ''
                  )}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      </Link>
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
  .linkContainer {
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

      ${cssWorkCardContent};

      .instruction {
        font-size: var(--fontS);
        color: var(--color-tertiary);
        button {
          transition: all 200ms ease-in-out;
          cursor: pointer;
          background-color: transparent;
          border-radius: 20px;
          color: var(--color-lighter);
          :hover {
            color: var(--color-dark);
            background-color: #c0c0c0;
          }
        }
      }
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
