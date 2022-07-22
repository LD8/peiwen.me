import { NextPage } from 'next'
import Link from 'next/link'
import HeadInfo from '../components/HeadInfo'
import CV_EDU from '../content/CV_EDU'
import CV_EXP from '../content/CV_EXP'
import CV_SKILLS from '../content/CV_SKILLS'
import CV_STATEMENT from '../content/CV_STATEMENT'
import { ContactInfo, SPaper } from './cv'

const CVZH: NextPage = () => {
  return (
    <SPaper id='SPaper' chinese>
      <HeadInfo
        title='李沛文的简历'
        description='将用户体验作为核心，对细节一丝不苟；在英国的深造学习，让我对艺术与科学作为一个整体具有一定深度的理解，
        对设计和编写高交互性、跨学科的项目更有信心'
      />
      <div className='content'>
        <div className='lang-switch-btn'>
          <Link href='/cv'>English</Link>
        </div>
        <section className='title'>
          <div className='title-left'>
            <ContactInfo lang='ZH' />
          </div>
          <div className='title-right'>
            <div className='general-info'>
              <h1
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px',
                  letterSpacing: '8px',
                }}
              >
                <span>李沛文</span>
                <span style={{ margin: '0 10px', color: 'grey' }}>·</span>
                <span
                  style={{ fontWeight: '400', color: 'grey', fontSize: '22px' }}
                >
                  前端开发
                </span>
              </h1>
              {CV_STATEMENT.ZH}
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
              <ul>
                <li>英语流利（雅思成绩8.0），法语初级</li>
                <li>业余时间喜欢游泳、看书、旅行和摄影</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </SPaper>
  )
}
export default CVZH
