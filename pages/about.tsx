import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import Details from '../components/Details'
import HeadInfo from '../components/HeadInfo'
import portrait300 from '../public/portrait-300.png'

const PROF = {
  HTML: 90,
  CSS: 92,
  Javascript: 95,
  NodeJS: 85,
  Python: 60,
  empty: 0,
  Photoshop: 75,
  SketchUp: 90,
  AutoCAD: 80,
}

const PeiwenMe: NextPage = () => {
  return (
    <SRow>
      <HeadInfo
        title='About Peiwen Li'
        description='A front-end developer and designer who is striving to develop software that brings peace and harmony to the
        world'
      />
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
        <Image src={portrait300} alt='me' className='image' />
      </aside>
      <section className='info'>
        <div className='intro'>
          <h1>Li · Peiwen</h1>
          <h3>Front-end Developer and Designer</h3>
          <p>
            Striving to develop software that brings peace and harmony to the
            world <em>and coding makes me happy!</em>
          </p>
        </div>

        <Skills data={PROF} />

        <div className='desc'>
          <Details summary='Why front-end?' open>
            <p>
              A frontend engineer doesn't just produce code, they provide
              efficient, user-centred and well-designed solutions to specific
              problems which are often about user experience. And I like solving
              puzzles. My education and experiences in art, design and science
              surely help with problem solving creatively in multidisciplinary
              projects and, as an outcome, increasing the overall quality of the
              products.
            </p>
          </Details>
          <Details summary='Why developer AND designer?'>
            <p>
              If art and science is a system for us to understand the
              universe... I <em>REEEEEEALLY</em> would like to understand it by
              participating on both sides of that system. Being a designer helps
              to be a better developer and vice versa. Therefore, why not to
              become both?
            </p>
          </Details>
          <Details summary='What else about me?'>
            <p>
              I've got lucky. Not only did I find my passion in programming in
              my mid 20s, but also did I get the chance to pursue it. The doubts
              of failing it have never crossed my mind because of all the
              support along the way from my family and friends.
            </p>
            <p>
              Living and studying in the UK, travelling around Europe was the
              most rewarding experience in my early adult life. It broadened my
              horizon and made me a global citizen.
            </p>
            <p>Now I work as a front-end engineer at eBay Shanghai.</p>
          </Details>
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
    .image {
      /* portrait me */
      /* filter: hue-rotate(10deg); */
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
      max-width: 128px;
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
            width: `calc(${proficiency}% - ${nameWidth} - ${descWidth})`,
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
  font-size: var(--fontS);
  margin: 0 0 10px 0;

  @media screen and (max-width: 600px) {
    /* adjustment -> to center in small screen */
    padding-left: 28px;
  }
`

const nameWidth = '70px'
const descWidth = '32px'
const SLiSkill = styled(motion.li)<{ width?: number }>`
  padding: 5px 0;
  > span.prof-name {
    display: inline-block;
    width: ${nameWidth};
  }
  > span.prof-bar {
    display: inline-block;
    height: 5px;
    margin-bottom: 2px;
    border-radius: 5px;
    /* width: ${({ width }) =>
      `calc(${width}% - ${nameWidth} - ${descWidth})`}; */
    background: #cecbc1;
    background: linear-gradient(90deg, rgb(210, 210, 210) 0%, var(--airy) 100%);
  }
  > span.prof-desc {
    display: inline-block;
    width: ${descWidth};
    text-align: right;
  }
`
