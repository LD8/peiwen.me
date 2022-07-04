import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import ExternalLink from '../components/ExternalLink'

const CV: NextPage = () => {
  return (
    <SPaper id='SPaper'>
      <div className='content'>
        <Head>
          <title>Peiwen Li's CV</title>
        </Head>
        <div className='lang-switch-btn'>
          <Link href='/cv-zh'>中文</Link>
        </div>
        <section className='title'>
          <div className='portrait-container'>
            <Image
              src='/cv-portrait-sm.jpg'
              alt="Peiwen Li's portrait"
              width='150'
              height='150'
            />
          </div>
          <div className='info'>
            <div className='general-info'>
              <h1>Li · Peiwen</h1>
              <h2>Full-stack Software Developer</h2>
              <p>
                User-centered, scrupulous; develop software that brings joy and
                peace to the world
              </p>
            </div>
            <div className='contact-info'>
              <ExternalLink href='http://donlee.online'>
                donlee.online
              </ExternalLink>
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
            <h3>Skills</h3>
          </div>
          <div className='sub-container'>
            <div className='aside'></div>
            <div className='details'>
              <ul>
                <li>
                  let <b>frontEnd</b> = <em>TypeScript + ReactJS</em>{' '}
                  <i>// with other related JS libraries</i>
                </li>
                <li>
                  let <b>backEnd</b> = <em>NodeJS</em> as BFF{' '}
                  <i>// with occasional Python frameworks</i>
                </li>
                <li>
                  let <b>diff</b> = 'a master degree in Art and Science'{' '}
                  <i>
                    // with great confidence and scrutiny to design and build{' '}
                    <u>multi-disciplinary</u> projects
                  </i>
                </li>
                <li>let it grow naturally and be free like water</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='experience'>
          <div className='sub-title'>
            <h3>Experience</h3>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>eBay</p>
              <p className='year'>Sept 2021 - Now</p>
              <ExternalLink href='https://ebay.com/'>eBay.com</ExternalLink>
            </div>
            <div className='details'>
              <h4>Front-end Engineer | UX Designer</h4>
              <ul>
                <li>
                  <b>Responsible</b> for the front-end development of a root
                  cause analysis system apart from developing other web apps for
                  SRE team
                </li>
                <li>
                  <b>Research</b> the habbit of the clients (TDOs);
                  subsequently, propose new solutions to improve the usability
                  of the apps
                </li>
                <li>
                  <b>Challenges</b> are mainly derived from the question of how
                  to finetune the ways in which relevant data is visualised
                </li>
              </ul>
              <p>
                Taking over a complicated pre-exisiting project is never easy.
                However, after a couple of months, our clients claimed that the
                appearance as well as the usability of the app had been
                drastically improved. Taking users' needs into account, the
                project is constently evolving.
              </p>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>Points</p>
              <p className='year'>Apr 2021 - Sept 2021</p>
              <ExternalLink href='https://points.org/'>points.org</ExternalLink>
            </div>
            <div className='details'>
              <h4>Front-end Engineer | UX Designer</h4>
              <p>
                <em>A privacy computing platform</em> built with custimised
                UmiJS framework (TypeScript) came to live during this fast-paced
                yet fulfilling period.
              </p>
              <ul>
                <li>
                  <b>Responsible</b> for the front-end development of a brand
                  new product
                </li>
                <li>
                  <b>UX Design:</b> consolidate the requirements of the product
                  by analysing the needs of the end-users; then, collaborate
                  with UI team to optimise the overall UX of the app
                </li>
                <li>
                  <b>Challenges:</b> figure out ways to build it efficiently
                  while maintaining a predetermined design language
                </li>
              </ul>
              <p>
                This role emphasises the technical craftsmanship of the
                front-end development, offering the chance to work with
                different teams to finalise the requirements of the product for
                UX optimisation purposes.
              </p>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>MakeFurther IT</p>
              <p className='year'>May 2020 - Apr 2021</p>
              <ExternalLink href='http://www.makefurther.com/'>
                makefurther.com
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>Web Developer | UI & UX Designer</h4>
              <p>
                Not only did I get to design the interface of
                <em> an innovative B2B quantitative trading system</em> but also
                to code it.
              </p>
              <ul>
                <li>
                  <b>Web Dev:</b> build the system with TypeScript, React
                  alongside ant-design lib, UmiJS framework
                </li>
                <li>
                  <b>UI & UX Design:</b> design web UI based on the requirement
                  doc, do compatitive research, prototype with Adobe XD,
                  complete with design documents including frontend coding
                  regulations and references
                </li>
                <li>
                  <b>Execution:</b> lead weekly UI inspection meetings,
                  providing chances to revise and to improve the UX
                </li>
                <li>
                  <b>Communication:</b> become the tunnels connecting project
                  manager, demand sector, frontend leader and backend leader, so
                  projects run smoothly
                </li>
              </ul>
              <p>
                Diving in high profile projects immediately after joining the
                company was a challenge. The platform had reached its alpha
                phase after three months of development. Now it has become one
                of the feature products of the company.
              </p>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>Freelance</p>
              <p className='year'>Jun 2019 - May 2020</p>
              <ExternalLink href='http://peiwen.me'>peiwen.me</ExternalLink>
            </div>
            <div className='details'>
              <h4>Web Developer | UI & UX Designer</h4>
              <ul>
                <li>
                  Design interactive interfaces for clients based on their needs
                </li>
                <li>
                  Develop web apps independently with React, Django, PostgreSQL
                </li>
                <li>
                  Iteratively improve the UX of an app based on analysed
                  feedbacks
                </li>
                <li>
                  Portfolio:
                  <ExternalLink
                    href='https://peiwen.me/work-and-joy'
                    style={{ paddingLeft: '6px' }}
                  >
                    peiwen.me/work
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>ACG International</p>
              <p className='year'>Jun 2017 - Jun 2019</p>
              <ExternalLink href='https://www.acgorg.com/'>
                acgorg.com
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>Instructor — Art and Design</h4>
              <ul>
                <li>
                  Teach applied arts, primarily interior design and analogue
                  photography process, to students who seek academic development
                  in related subjects
                </li>
                <li>Develop curriculum and prepare outlines for workshops</li>
                <li>Provide individualised tutorial or remedial instruction</li>
                <li>Supervise independent projects and hands-on training</li>
                <li>
                  Advise students on program curricula and career decisions
                </li>
              </ul>
              <p>
                In these two years as a teacher, 32 amongst 34 of my students
                have successfully secured offers from prestigious art
                institutions across UK, France, US, Canada, Australia, students
                majored in Interior design, photography and landscape design
                both on BA level (40%) and MA level (60%). While helping my
                lovely students embarking on their great journey, for
                consistently growing interests, I had been studying programming
                since 2015
              </p>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>British Library</p>
              <p className='year'>May - Nov 2015</p>
              <ExternalLink href='https://www.bl.uk/'>bl.uk</ExternalLink>
            </div>
            <div className='details'>
              <h4>Volunteer Interpreter</h4>
              <p>
                Interpreting Chinese minority manuscripts (mainly scores). Only
                after being interpreted in Pinyin can they be further studied.
                Nearly 100 scripts were translated in half year. I am thrilled
                to have participated in the dissemination of Chinese minority
                culture on an international stage
              </p>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>M Moser Associates</p>
              <p className='year'>May 2011 - May 2013</p>
              <ExternalLink href='https://www.mmoser.com'>
                mmoser.com
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>Project Coordinator and Interior Designer</h4>
              <p>
                From a project coordinator to a designer who leads a small team,
                my skills and duties had grown from drawing draft plans to:
              </p>
              <ul>
                <li>putting together project presentations</li>
                <li>presenting design ideas to clients in presentations</li>
                <li>on site construction management</li>
              </ul>
              <p>
                Delivered numerous projects (more than 5000 sqm in total), all
                of which were on schedule. I could not do it without a team
                effort
              </p>
            </div>
          </div>
        </section>

        <section className='education'>
          <div className='sub-title'>
            <h3>Education</h3>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='year'>2018 - 2020</p>
              <ExternalLink href='http://www.interaction-design.org'>
                interaction-design.org
              </ExternalLink>
              <br />
              <ExternalLink href='http://www.freecodecamp.com'>
                freecodecamp.com
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>Frontend Programmer Certificate, UI Design Practice</h4>
              <p>FreeCodeCamp, Interaction Design Foundation</p>
              <h6>Online / self-taught</h6>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='year'>2014 - 2016</p>
              <ExternalLink href='http://www.arts.ac.uk'>
                arts.ac.uk
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>MA. in Art and Science</h4>
              <p>Central Saint Martins, University of Arts London</p>
              <h6>London, UK</h6>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='year'>2013 - 2014</p>
              <ExternalLink href='http://www.csvpa.com'>csvpa.com</ExternalLink>
            </div>
            <div className='details'>
              <h4>Pre MA.</h4>
              <p>Cambridge School of Visual and Performing Arts</p>
              <h6>Cambridge, UK</h6>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='year'>2009 - 2011</p>
              <ExternalLink href='http://www.shnu.edu.cn'>
                shnu.edu.cn
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>Certificate - Interior Design</h4>
              <p>Shanghai Normal university</p>
              <h6>Shanghai, China</h6>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='year'>2006 - 2010</p>
              <ExternalLink href='http://www.tongji.edu.cn'>
                tongji.edu.cn
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>Diploma - Intelligent building and Technology</h4>
              <p>Tongji University</p>
              <h6>Shanghai, China</h6>
            </div>
          </div>
        </section>

        <section className='other'>
          <div className='sub-title'>
            <h3>Other Perks</h3>
          </div>

          <div className='sub-container'>
            <div className='aside'></div>
            <div className='details'>
              <ul style={{ marginLeft: '15px' }}>
                <li>Fluent in English (IELTS 8.0), native Mandarin speaker</li>
                <li>
                  In my free time, I like to read, blog, swim, photography and
                  travel
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
        color: var(--theme-vivid);
        border-radius: 5px 0 0 5px;
        border: 1px solid var(--theme-vivid);
        background-color: transparent;

        &:hover {
          color: white;
          text-decoration: none;
          background-color: var(--theme-vivid);
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
      list-style: square;
      margin-left: 20px;
    }

    b {
      font-weight: 600;
    }

    i {
      color: #979797;
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

      .portrait-container {
        width: var(--aside-width);
        padding-right: 20px;

        img {
          border-radius: 3px;
        }
      }

      .info {
        display: flex;
        width: var(--main-width);

        .general-info {
          width: 460px;
          padding-right: 20px;

          h1 {
            text-transform: uppercase;
            padding-top: 5px;
            font-size: var(--fontXL);
            font-weight: 600;
            letter-spacing: 0.05em;
            color: var(--theme-vivid);
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

        .contact-info {
          width: 130px;
          height: 90px;
          padding-left: 20px;
          border-left: 2px solid rgb(240, 240, 240);

          a {
            color: var(--theme-vivid);
            text-decoration: none;
            display: block;
            font-size: var(--fontS);

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 800px) {
      .title {
        flex-direction: column;
        align-items: center;

        .portrait-container {
          padding: 0;
          display: flex;
          justify-content: center;
        }

        .info {
          margin-top: 25px;
          flex-direction: column;
          align-items: center;
          text-align: center;

          .general-info {
            width: 100%;
            padding: 0;
          }

          .contact-info {
            width: 100%;
            height: auto;
            margin-top: 10px;
            padding: 0;
            border-style: none;
            a {
              display: inline-block;
            }
            a:nth-child(2),
            a:nth-child(3) {
              &::before {
                content: '/';
                padding: 0 5px;
                color: grey;
              }
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
        color: var(--theme-vivid);

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

          color: var(--theme-vivid);
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

          .year {
            font-weight: 300;
          }
        }

        .details {
          width: var(--main-width);
          h6 {
            font-size: var(--fontS);
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
