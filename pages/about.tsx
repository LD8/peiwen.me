import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import HeadInfo from '../components/HeadInfo'

const PROF = {
  HTML: 90,
  CSS: 92,
  Javascript: 95,
  NodeJS: 80,
  Python: 60,
  empty: 0,
  Photoshop: 75,
  SketchUp: 90,
  AutoCAD: 80,
}

const PeiwenMe: NextPage = () => {
  return (
    <SRow>
      <HeadInfo title="About Peiwen Li" />
      {/* <LeafSwirl
        style={{ top: '0vh', left: '0', fontSize: '70vh' }}
        swing={50}
      /> */}
      {/* <LeafSwirl style={{ top: '60vh', fontSize: '25vh' }} swing={30} />
      <LeafSwirl
        style={{ top: '30vh', right: '0', fontSize: '30vh' }}
        swing={20}
      /> */}
      <aside className='portrait'>
        <Image src='/me.png' alt='me' width='128' height='128' />
      </aside>
      <section className='info'>
        <div className='intro'>
          <h1>Li · Peiwen</h1>
          <h3>Full-stack Software Engineer</h3>
          <p>
            Passionate in developing software that brings happiness and light
            into our lives
          </p>
        </div>

        <Skills data={PROF} />

        <div className='desc'>
          <p>
            He feels lucky to have found his passion in programming in his late
            20s, for it involves not only the science side of the brain but also
            the art side, especailly for a frontend engineer.
          </p>
          <p>
            Having a master degree in Art and Science, Peiwen is confident in
            designing and building{' '}
            <em>
              <b>multi-disciplinary</b>
            </em>{' '}
            projects. Now he works as a front-end engineer at eBay Shanghai.
          </p>
          <p>
            "Living and studying in the UK, traveling around Europe was the most
            rewarding experience in my early adult life." He states with a
            vigorous smile. It broadened his horizon and made him a worldly
            citizen.
          </p>
        </div>
      </section>
    </SRow>
  )
}
// It took him 2 years to acquire the necessary knowledge to proudly land his first free-lance job in 2019. <br />
export default PeiwenMe

const SRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: calc(2vw + 20px);
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;

  > aside.portrait {
    align-self: flex-start;
    flex: 1 128px;
    min-height: 128px;
    min-width: 168px;
    padding-left: 40px;
    img {
      /* portrait me */
      filter: hue-rotate(105deg);
    }
  }
  > section.info {
    flex: 2 400px;
    > div.intro {
      padding: 10px 0 20px 0;
      > h1 {
        color: var(--airy-dark);
        /* background: linear-gradient(
          45deg,
          var(--airy-dark) 8%,
          var(--airy) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
      }
    }
    > div.desc {
      padding-top: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    > aside.portrait {
      align-self: center;
      flex: auto;
      min-width: 128px;
      padding-left: 0px;
    }
    > section.info {
      flex: auto;
      margin-bottom: 20px;
      > div.intro {
        text-align: center;
      }
    }
  }
`

// NOTE: https://www.framer.com/docs/transition/###staggerdirection
const varUl = { show: { transition: { staggerChildren: 0.05 } } }
const varLi = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
}
const Skills: React.FC<{ data: Record<string, number> }> = ({ data }) => {
  return (
    <SUlSkills variants={varUl} initial='hidden' animate='show'>
      {Object.entries(data).map(([name, proficiency]) => {
        const varSpan = {
          hidden: { opacity: 0, width: 0 },
          show: {
            opacity: 1,
            width: `calc(${proficiency}% - ${namewidth} - ${descwidth})`,
            transition: { duration: 0.8 },
          },
        }
        return proficiency ? (
          <SLiSkill key={name} variants={varLi}>
            <span className='prof-name'>{name}</span>
            <motion.span variants={varSpan} className='prof-bar' />
            <span className='prof-desc'>{proficiency}%</span>
          </SLiSkill>
        ) : (
          <div key={name} style={{ height: '20px' }} />
        )
      })}
    </SUlSkills>
  )
}

const SUlSkills = styled(motion.ul)`
  font-size: 12px;
  margin: 0 0 10px 0;

  @media screen and (max-width: 600px) {
    /* adjustment -> to center in small screen */
    padding-left: 30px;
  }
`

const namewidth = '70px'
const descwidth = '32px'
const SLiSkill = styled(motion.li)<{ width?: number }>`
  padding: 5px 0;
  > span.prof-name {
    display: inline-block;
    width: ${namewidth};
  }
  > span.prof-bar {
    display: inline-block;
    height: 5px;
    margin-bottom: 2px;
    border-radius: 5px;
    /* width: ${({ width }) =>
      `calc(${width}% - ${namewidth} - ${descwidth})`}; */
    background: #cecbc1;
    background: linear-gradient(
      90deg,
      var(--color-light) 0%,
      var(--airy) 100%
    );
  }
  > span.prof-desc {
    display: inline-block;
    width: ${descwidth};
    text-align: right;
  }
`
