import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ExternalLink from '../components/ExternalLink'
import CV_EDU from '../content/CV_EDU'
import CV_EXP from '../content/CV_EXP'
import CV_SKILLS from '../content/CV_SKILLS'
import { SPaper } from './cv'
import cvPortrait from '../public/cv-portrait-sm.jpg'

const CVZH: NextPage = () => {
  return (
    <SPaper id='SPaper' chinese>
      <div className='content'>
        <Head>
          <title>李沛文的简历</title>
        </Head>
        <div className='lang-switch-btn'>
          <Link href='/cv'>
            <a>English</a>
          </Link>
        </div>
        <section className='title'>
          <div className='portrait-container'>
            <Image src={cvPortrait} alt="Peiwen Li's portrait" />
          </div>
          <div className='info'>
            <div className='general-info'>
              <h1>李沛文</h1>
              <h2>全栈开发</h2>
              <p>
                将用户体验作为核心，对细节一丝不苟，开发为世界带来喜悦与平和的软件
              </p>
            </div>
            <div className='contact-info'>
              <ExternalLink href='http://peiwen.me'>peiwen.me</ExternalLink>
              <ExternalLink href='mailto: don_lee@me.com'>
                don_lee@me.com
              </ExternalLink>
              <ExternalLink href='https://github.com/ld8'>
                github.com/ld8
              </ExternalLink>
            </div>
          </div>
        </section>

        <section className='skills'>
          <div className='sub-title'>
            <h3>技能</h3>
          </div>
          <div className='sub-container'>
            <div className='aside' />
            <div className='details'>{CV_SKILLS.ul_ZH}</div>
          </div>
        </section>

        <section className='experience'>
          <div className='sub-title'>
            <h3>工作经验</h3>
          </div>
          {CV_EXP.map(({ ZH: exp }) => (
            <div className='sub-container' key={exp.company_name}>
              <div className='aside'>
                <p className='company-name'>{exp.company_name}</p>
                <p className='time-period'>{exp.time_period}</p>
                {exp.link}
              </div>
              <div className='details'>{exp.jsx_details}</div>
            </div>
          ))}
        </section>

        <section className='education'>
          <div className='sub-title'>
            <h3>教育背景</h3>
          </div>
          {CV_EDU.map(({ time_period, link, jsx_details_ZH }) => (
            <div className='sub-container' key={time_period}>
              <div className='aside'>
                <p className='time-period'>{time_period}</p>
                {link}
              </div>
              <div className='details'>{jsx_details_ZH}</div>
            </div>
          ))}
        </section>

        <section className='other'>
          <div className='sub-title'>
            <h3>其他特长</h3>
          </div>

          <div className='sub-container'>
            <div className='aside' />
            <div className='details'>
              <ul style={{ marginLeft: '15px' }}>
                <li>英语流利（雅思成绩8.0），法语初级</li>
                <li>业余时间喜欢看书、写博客、游泳、摄影和旅行</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </SPaper>
  )
}
export default CVZH
