import { AnimatePresence, motion } from 'framer-motion'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import BadgeList from '../../components/BadgeList'
import ExternalLink from '../../components/ExternalLink'
import HeadInfo from '../../components/HeadInfo'
import { getAllWorkSlugs, getWork, IWorkDetail } from '../../lib/getWorkData'

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: getAllWorkSlugs(), fallback: false }
}

export const getStaticProps: GetStaticProps<IWorkDetail> = (context) => {
  return { props: getWork(context.params?.slug as string) }
}

const WorkDetail: NextPage<IWorkDetail> = ({
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
        <h1>{title}</h1>
        <p>{summary}</p>
        <BadgeList
          badgeList={badges}
          style={{ justifyContent: 'flex-start', margin: 0 }}
        />
        <Carousel imgSrcArr={imgSrcArr} title={title} />
      </section>

      <section className='about'>
        <h2>About this project</h2>
        {content?.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p className='dates'>
          Project duration: {'  '}
          <span>{startedAt}</span> - <span>{endedAt}</span>
        </p>
      </section>

      <section className='technical-sheet'>
        <h2>Technical Sheet</h2>
        <ul>
          {techs?.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
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
    a {
      color: orangered;
      :hover {
        color: greenyellow;
      }
      :visited {
        color: green;
        :hover {
          color: greenyellow;
        }
      }
    }
  }

  > section.about {
    .dates {
      font-size: smaller;
    }
  }
`

const SectionResources: React.FC<{ links: IWorkDetail['links'] }> = ({
  links,
}) => {
  return (
    <section>
      <h2>Resources</h2>
      <ul>
        {links.online && (
          <li>
            <SSpan>Visit the website:</SSpan>
            <SAnchor href={links.online}>{links.online}</SAnchor>
          </li>
        )}
        {links.github && (
          <li>
            <SSpan>GitHub source files:</SSpan>
            <SAnchor href={links.github}>{links.github}</SAnchor>
          </li>
        )}
        {links.codeSandbox && (
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

const Carousel: React.FC<{
  imgSrcArr: IWorkDetail['imgSrcArr']
  title: string
}> = ({ imgSrcArr, title }) => {
  const [index, setIndex] = useState(0)
  return (
    <SCarousel
      onClick={() => setIndex((prev) => (prev + 1) % imgSrcArr.length)}
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
            src={imgSrcArr[index]}
            alt={`Peiwen's project - ${title} - image sample ${index + 1}`}
            width={800}
            height={533.33}
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
    img {
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
