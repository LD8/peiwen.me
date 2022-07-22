import { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import ExternalLink from '../components/ExternalLink'
import HeadInfo from '../components/HeadInfo'
import CV_EDU from '../content/CV_EDU'
import CV_EXP from '../content/CV_EXP'
import CV_SKILLS from '../content/CV_SKILLS'
import CV_STATEMENT from '../content/CV_STATEMENT'

export const ContactInfo: React.FC<{ lang?: 'EN' | 'ZH' }> = ({
  lang = 'EN',
}) => (
  <div className='contact-info'>
    <ExternalLink href='mailto: don_lee@me.com'>don_lee@me.com</ExternalLink>
    <ExternalLink href='https://peiwen.me'>https://peiwen.me</ExternalLink>
    {/* <ExternalLink href='https://github.com/ld8'>
      https://github.com/ld8
    </ExternalLink> */}
    <div>
      <em style={{ fontSize: '12px' }}>(+86) 150 005 288 42</em>
    </div>
    <div>
      <em style={{ fontSize: '12px' }}>
        {lang === 'EN' ? 'Shanghai, China' : '上海市 徐汇区'}
      </em>
    </div>
  </div>
)

const CV: NextPage = () => {
  return (
    <SPaper id='SPaper'>
      <HeadInfo
        title="Peiwen Li's CV"
        description='User-centered, scrupulous; develop software that brings joy and peace to the world'
      />
      <div className='content'>
        <div className='lang-switch-btn'>
          <Link href='/cv-zh'>中文</Link>
        </div>
        <section className='title'>
          <div className='title-left'>
            <ContactInfo />
          </div>
          <div className='title-right'>
            <div className='general-info'>
              <h1>Li · Peiwen</h1>
              <h2>Front-end Software Developer</h2>
              {CV_STATEMENT.EN}
            </div>
          </div>
        </section>

        <section className='skills'>
          <div className='sub-title'>
            <h3>Skills</h3>
          </div>
          <div className='sub-container'>
            <div className='aside' />
            <div className='details'>{CV_SKILLS.ul_EN}</div>
          </div>
        </section>

        <section className='experience'>
          <div className='sub-title'>
            <h3>Experience</h3>
          </div>
          {CV_EXP.map(({ EN: exp }) => (
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
            <h3>Education</h3>
          </div>
          {CV_EDU.map(({ time_period, link, jsx_details_EN }) => (
            <div className='sub-container' key={time_period}>
              <div className='aside'>
                <p className='time-period'>{time_period}</p>
                {link}
              </div>
              <div className='details'>{jsx_details_EN}</div>
            </div>
          ))}
        </section>

        <section className='other'>
          <div className='sub-title'>
            <h3>Other Perks</h3>
          </div>

          <div className='sub-container'>
            <div className='aside' />
            <div className='details'>
              <ul>
                <li>Fluent in English (IELTS 8/9), native Mandarin speaker</li>
                <li>
                  Swim, read, blog, travel and take photos in my free time
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </SPaper>
  )
}
export default CV

export const SPaper = styled.main<{ chinese?: boolean }>`
  margin: 50px auto;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    margin: 0;
  }

  .content {
    text-align: justify;
    /* init: override default set in global.css */
    p {
      margin: 0;
      color: var(--color-dark);
      font-size: var(--fontM);
      line-height: ${({ chinese = false }) => (chinese ? '1.8em' : '1.5em')};
    }

    position: relative;
    width: 100%;
    height: 100%;
    max-width: var(--whole-width);
    padding: var(--paper-padding);
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    font-size: var(--fontM);
    color: var(--color-dark);
    line-height: ${({ chinese = false }) => (chinese ? '1.8em' : '1.5em')};

    border: 1px solid rgb(230, 230, 230);
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 10px 20px 2px rgb(120, 120, 120);

    /* ------------------------- Language Switch ------- */
    .lang-switch-btn {
      position: fixed;
      align-self: flex-end;
      margin-right: -41px;
      bottom: 20vh;
      z-index: 10;

      a {
        padding: 5px;
        text-decoration: none;
        font-size: var(--fontS);
        color: var(--airy-vivid);
        border-radius: 5px 0 0 5px;
        border: 1px solid var(--airy-vivid);
        background-color: transparent;

        &:hover {
          color: white;
          text-decoration: none;
          background-color: var(--airy-vivid);
        }
      }

      @media screen and (min-width: 800px) {
        margin-right: -81px;
        a {
          padding: 8px 10px;
        }
      }

      @media print {
        display: none;
      }
    }

    /* ------------------------- general ------- */

    ul {
      list-style: unset;
      margin-left: 20px;
    }

    b {
      font-weight: 600;
    }

    i {
      color: var(--color-secondary);
    }

    h4,
    .company-name {
      background-color: rgb(242, 242, 242);
      margin-bottom: 5px;
    }

    h4 {
      font-weight: 600;
      padding-left: 5px;
      border-radius: 0 5px 5px 0;
    }

    .company-name {
      padding-right: 5px;
      border-radius: 5px 0 0 5px;
    }

    @media only screen and (max-width: 800px) {
      h4 {
        border-radius: 5px;
      }
      .company-name {
        padding: 0;
        background-color: transparent;
      }
    }

    /* ------------------------- title section ------- */
    .title {
      margin-bottom: 30px;
      display: flex;

      .title-left {
        width: var(--aside-width);
        padding-right: 20px;
        text-align: right;

        .contact-info {
          height: 100%;
          padding-right: 20px;
          border-right: 2px solid rgb(240, 240, 240);

          a {
            color: var(--airy-vivid);
            text-decoration: none;
            display: block;
            font-size: var(--fontS);

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .title-right {
        display: flex;
        width: var(--main-width);

        .general-info {
          /* width: 460px; */
          /* padding-right: 20px; */

          h1 {
            text-transform: uppercase;
            padding-top: 5px;
            font-size: var(--fontXL);
            font-weight: 600;
            letter-spacing: 0.05em;
            color: var(--airy-vivid);
          }

          h2 {
            font-weight: 100;
            color: grey;
            margin: ${({ chinese = false }) => (chinese ? '15px 0' : '10px 0')};
            font-size: ${({ chinese = false }) => (chinese ? 'medium' : '')};
          }

          p {
            font-size: var(--fontM);
          }
        }
      }
    }

    @media only screen and (max-width: 800px) {
      .title {
        flex-direction: column-reverse;
        align-items: center;

        .title-left {
          padding: 0;
          display: flex;
          justify-content: center;

          .contact-info {
            width: 100%;
            height: auto;
            text-align: center;
            margin-top: 10px;
            padding: 0;
            border-style: none;
            a {
              display: inline-block;
            }
            > a::before {
              content: '·';
              padding: 0 8px 0 5px;
              color: grey;
            }
            a:first-child::before {
              content: '';
            }
          }
        }

        .title-right {
          margin-top: 25px;
          text-align: center;

          .general-info {
            h1 {
              justify-content: center;
            }
          }
        }
      }
    }

    /* ------------------------- SEE sections ------- */
    .skills,
    .experience,
    .education,
    .other {
      width: calc(var(--whole-width) - var(--paper-padding) * 2 - 2);
      margin-bottom: 20px;
      /* margin-left: auto; */
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
        font-weight: 300;
        color: var(--airy-vivid);

        &:hover {
          text-decoration: underline;
        }
      }

      .sub-title {
        width: var(--main-width);
        margin-left: auto;

        h3 {
          width: var(--main-width);
          margin-bottom: var(--fontS);
          padding-bottom: 5px;

          color: var(--airy-vivid);
          font-size: var(--fontL);
          font-weight: 100;
          letter-spacing: 0.05em;
          border-bottom: 2px solid rgb(240, 240, 240);
        }
      }

      .sub-container {
        display: flex;
        margin-bottom: 20px;

        .aside {
          width: var(--aside-width);
          text-align: right;
          padding-right: 20px;

          .time-period {
            font-weight: 300;
          }
        }

        .details {
          width: var(--main-width);
          h6 {
            font-size: var(--fontS);
            padding-left: 5px;
          }
          > ul,
          > p {
            padding: 0 5px;
          }
          > :first-child {
            padding: 0 5px;
          }
        }
      }
    }

    @media only screen and (max-width: 800px) {
      .skills,
      .experience,
      .education,
      .other {
        width: 100%;

        .sub-title {
          width: 100%;
        }

        .sub-container {
          flex-direction: column;

          .aside {
            display: flex;
            justify-content: space-between;
            text-align: left;
            padding: 0;

            a {
              display: none;
            }
          }

          .details {
            margin: 5px 0 20px 0;
          }
        }
      }

      .experience,
      .education {
        .sub-container {
          border-bottom: 1px solid rgb(240, 240, 240);

          :last-child {
            border-bottom: none;
          }
        }
      }
    }
  }

  @media print {
    margin: 0;
    .content {
      width: 842px;
      padding: 0;
      border: none;
      box-shadow: none;
      /* .experience{
      .sub-container {
        margin-bottom: 40px;
      }
    } */
    }
  }
`
