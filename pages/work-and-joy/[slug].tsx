import { AnimatePresence, motion } from 'framer-motion'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import BadgeList from '../../components/BadgeList'
import ExternalLink from '../../components/ExternalLink'
import HeadInfo from '../../components/HeadInfo'
import { IMG_WORK } from '../../content/IMAGES'
import genShimmerDataUrl from '../../lib/genShimmerDataUrl'
import { getAllWorkSlugs, getWork, IWork } from '../../lib/getWorkData'

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: getAllWorkSlugs(), fallback: false }
}

export const getStaticProps: GetStaticProps<IWork> = (context) => {
  return { props: getWork(context.params?.slug as string) }
}

const WorkDetail: NextPage<IWork> = ({
  slug,
  title,
  summary,
  imgSrcArr,
  content,
  techs,
  links,
  startedAt,
  endedAt,
  badges,
}) => {
  return (
    <StyledContainer>
      <HeadInfo title={`Project - ${title}`} />

      <section className='intro'>
        <h1>
          {links?.online ? (
            <ExternalLink href={links.online}>{title}</ExternalLink>
          ) : (
            title
          )}
        </h1>
        <p>{summary}</p>
        <BadgeList
          badgeList={badges}
          style={{ justifyContent: 'flex-start', margin: 0 }}
        />
        <Carousel slug={slug} title={title} />
      </section>

      <section className='technical-sheet'>
        <h2>Technical Sheet</h2>
        <ul>
          {techs?.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className='about'>
        <h2>About this project</h2>
        {content?.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p className='dates'>
          Project duration: {'  '}
          {startedAt === endedAt ? (
            <span>{endedAt}</span>
          ) : (
            <span>{`${startedAt} - ${endedAt}`}</span>
          )}
        </p>
      </section>

      {links && Object.keys(links).length !== 0 && (
        <SectionResources links={links} />
      )}
    </StyledContainer>
  )
}

export default WorkDetail

const StyledContainer = styled.div`
  max-width: 800px;

  > section {
    margin-bottom: 2rem;

    p {
      color: var(--color-dark);
      font-size: var(--fontM);
      line-height: 1.8rem;
    }
    h2 {
      font-weight: 400;
      border-bottom: 1px solid silver;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    ul {
      line-height: 1.6rem;
      margin-left: 20px;
      list-style: circle;
    }
  }

  > section.about {
    .dates {
      font-size: smaller;
    }
  }
`

const SectionResources: React.FC<{ links: IWork['links'] }> = ({ links }) => {
  return (
    <section>
      <h2>Resources</h2>
      <ul>
        {links?.online && (
          <li>
            <SSpan>Visit the website:</SSpan>
            <SAnchor href={links.online}>{links.online}</SAnchor>
          </li>
        )}
        {links?.github && (
          <li>
            <SSpan>GitHub source files:</SSpan>
            <SAnchor href={links.github}>{links.github}</SAnchor>
          </li>
        )}
        {links?.codeSandbox && (
          <li>
            <SSpan>Code-Sandbox:</SSpan>
            <SAnchor href={links.codeSandbox}>Portal Here</SAnchor>
          </li>
        )}
      </ul>
    </section>
  )
}

const SSpan = styled.span`
  min-width: 200px;
  padding-right: 20px;
`
const SAnchor = styled(ExternalLink)`
  text-transform: uppercase;
  font-size: smaller;
`

const Carousel: React.FC<{ slug: string; title: string }> = ({
  slug,
  title,
}) => {
  const [index, setIndex] = useState(0)
  return (
    <SCarousel
      onClick={() => setIndex((prev) => (prev + 1) % IMG_WORK[slug].length)}
    >
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.05 }}
          className='imgContainer'
        >
          {/* DO_NEXT: fixbug cornered on click */}
          <Image
            src={IMG_WORK[slug][index]}
            alt={`Peiwen's project - ${title} - image sample ${index + 1}`}
            className='display'
            placeholder='blur'
            blurDataURL={genShimmerDataUrl(840, 560)}
            width={840}
            height={560}
          />
        </motion.div>
      </AnimatePresence>
    </SCarousel>
  )
}

const SCarousel = styled.div`
  position: relative;
  cursor: pointer;
  margin: 20px 0;

  > div.imgContainer {
    overflow: hidden;
    aspect-ratio: 3 / 2;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    display: flex;
    transition: all 200ms ease-in-out;
    .display {
      border-radius: 15px;
      transition: all 300ms ease-in-out;
    }
    :hover {
      box-shadow: unset;

      img {
        /* transform: scale(1.02); */
        filter: brightness(95%);
      }
    }
  }
`
