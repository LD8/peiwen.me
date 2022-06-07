import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ExternalLink from '../components/ExternalLink'
import { SPaper } from './cv'

const CVZH: NextPage = () => {
  return (
    <SPaper id='SPaper' chinese>
      <div className='content'>
        <Head>
          <title>李沛文的中文简历</title>
        </Head>
        <div className='lang-switch-btn'>
          <Link href='/cv'>
            <a>English</a>
          </Link>
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
              <h1>李沛文</h1>
              <h2>全栈开发</h2>
              <p>
                将用户体验作为核心，对细节一丝不苟，开发为世界带来喜悦与平和的软件
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
            <h3>技能</h3>
          </div>
          <div className='sub-container'>
            <div className='aside'></div>
            <div className='details'>
              <ul>
                <li>
                  前端：JavaScript, TypeScript, ReactJS, Redux, MobX, NextJS,
                  VueJS, NuxtJS, UmiJS, Webpack, HTML5, CSS3, SASS, LESS,
                  Bootstrap, Material UI, Chakra UI, Ant Desgin
                </li>
                <li>后端：NodeJS, Python, Django, Flask, Postgres</li>
                <li>数据可视化：Python, Plotly, Matplotlib</li>
                <li>
                  UI/UX：经过在英国的硕士学习，对艺术与科学交叉项目有了清晰的认识和具有一定深度的理解，对设计和编写高质量的、高交互性、跨学科的项目很有信心
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='experience'>
          <div className='sub-title'>
            <h3>工作经验</h3>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>光之树科技，上海</p>
              <p className='year'>Apr 2021 - Now</p>
              <ExternalLink href='http://www.makefurther.com/'>
                makefurther.com
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>前端负责人 | 交互设计</h4>
              <ul>
                <li>
                  网页应用开发：负责开发隐私计算平台的前端页面，一手操办从前端框架选择、页面逻辑代码撰写、落实页面
                  UI、到最终交互优化的全过程
                </li>
                <li>
                  界面设计：配合 UI
                  团队的小伙伴完成页面的样式设计，使界面既美观又提高了用户体验，更重要的是帮助前端小伙伴以更便捷的方式实现同样效果的设计
                </li>
                <li>
                  沟通协调：由于业务性质，存在一些产品需求上的不确定性，通过与项目经理沟通以及分析讨论，得出相应的前端解决方案
                </li>
              </ul>
              <p>
                更侧重于前端技术方面的研究和精进，并在短时间内帮助完成项目的梳理，从而明确需求以及优化用户体验
              </p>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>筹远科技，上海</p>
              <p className='year'>May 2020 - Apr 2021</p>
              <ExternalLink href='http://www.makefurther.com/'>
                makefurther.com
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>前端开发 | 交互设计</h4>
              <ul>
                <li>
                  网页开发：高效完成开发，熟练运用React和TypeScript，配合antd、umi等前端库和框架
                </li>
                <li>
                  UI和UX设计：用户界面及优化用户体验，统一设计语言，经过细致地调研后，使用Adobe
                  XD绘制别致的交互原型图，撰写设计说明，编辑设计文档，包括制定UI执行规范、添加代码备注等
                </li>
                <li>
                  融合实施：带领前端团队高效地实现设计，每周细致地UI走查、测试、评审、反馈等，对细节要求非常严格
                </li>
                <li>
                  沟通工作：成为需求、产品经理、前端领导和后端领导间沟通的桥梁，从而使产品更有活力
                </li>
              </ul>
              <p>
                入职之初便挑起UI和UX设计的重担，同时兼顾网页开发工作，大力推进UI在开发过程中的实施，与前端团队密切和细致地沟通，使之建立起对网页设计的信心，灌输新的设计理念，两个月内一个具有复杂界面的网页交易系统基本成型，成为公司自研主打产品之一
              </p>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>自由职业，上海</p>
              <p className='year'>June 2019 - May 2020</p>
              <ExternalLink href='http://www.donlee.online'>
                donlee.online
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>用户体验全栈编程</h4>
              <ul>
                <li>
                  根据客户的商业模式和规模设计网站交互界面，搭建后端API和数据库，独立编写代码
                </li>
                <li>
                  主要应用JavaScript (React)和Python，Django Web框架，PostgreSQL
                </li>
                <li>
                  作品展示：
                  <ExternalLink href='https://donlee.online'>
                    donlee.online/portfolio
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>环球艺盟，上海</p>
              <p className='year'>June 2017 - June 2019</p>
              <ExternalLink href='https://www.acgorg.com/'>
                acgorg.com
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>艺术与设计导师</h4>
              <ul>
                <li>
                  教授15至24岁年龄段的艺术学生室内设计初级以及传统摄影技法
                </li>
                <li>帮助学生建立自己的独立作品集</li>
                <li>帮助学生申请国际艺术院校</li>
                <li>设计新的课程大纲、测试及应用在教学中</li>
                <li>
                  提供根据学生个体情况的个别指导，鼓励学生独立动手完成项目
                </li>
                <li>提供必要的职业规划建议和指导</li>
              </ul>
              <p>
                在这两年的教学生涯中，经手34位学生，有32位申请上重点艺术院校，申请科目包括室内设计、摄影、景观设计，申请国家包括英国、法国、澳大利亚、美国、加拿大等，英联邦居多，其中申请本科的学生占40%，申请硕士的学生占60%；帮助学生申请到理想的院校、获得巨大的成就感的同时，2016年出于浓厚的兴趣，开始自学网页方向的编程
              </p>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>大英图书馆，伦敦</p>
              <p className='year'>May - November 2015</p>
              <ExternalLink href='https://www.bl.uk/'>bl.uk</ExternalLink>
            </div>
            <div className='details'>
              <h4>中国少数民族文献手稿翻译志愿者</h4>
              <p>
                翻译苗族、土家族等中国少数民族的曲谱手稿，大部分手稿经过注音可后续被专业人员进行理解和分析。在这半年期间，翻译将近一百页文献，希望能通过此举促进中国少数民族文化在国际上的传播和研究
              </p>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='company-name'>穆氏建筑，上海</p>
              <p className='year'>May 2011 - May 2013</p>
              <ExternalLink href='https://www.mmoser.com'>
                mmoser.com
              </ExternalLink>
            </div>
            <div className='details'>
              <h4>室内设计师 | 项目管理和协调</h4>
              <p>从项目协调员成长为设计师，职责也在不断变化，包括</p>
              <ul>
                <li>绘制项目草图和施工图</li>
                <li>制作招投标文件，设计汇报演示文稿PPT</li>
                <li>向客户传达设计核心理念，后续与客户沟通设计进展</li>
                <li>与现场工程师协调，确保设计与质量的一致性</li>
                <li>与现场项目监理协调，确保项目如期完工</li>
              </ul>
              <p>
                在设计师的岗位上工作的两年中，完成1个面积超过2000平米的大型项目，2个面积在1000平米左右的中型项目，经手4个面积在500平米以下的小型项目，均顺利如期完成，历练了对社会职场的理解，对工程项目的管理形成了一定的理解，同时意识到自己学识的不足，随即出国深造
              </p>
            </div>
          </div>
        </section>

        <section className='education'>
          <div className='sub-title'>
            <h3>教育背景</h3>
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
              <h4>前端开发资格证，UI设计</h4>
              <p>FreeCodeCamp, Interaction Design Foundation</p>
              <h6>网络资源</h6>
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
              <h4>MA. 硕士 艺术与科学</h4>
              <p>中央圣马丁，伦敦艺术大学学院</p>
              <h6>英国伦敦</h6>
            </div>
          </div>

          <div className='sub-container'>
            <div className='aside'>
              <p className='year'>2013 - 2014</p>
              <ExternalLink href='http://www.csvpa.com'>csvpa.com</ExternalLink>
            </div>
            <div className='details'>
              <h4>Pre MA. 硕士预科</h4>
              <p>剑桥艺术与表演学校</p>
              <h6>英国剑桥</h6>
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
              <h4>室内设计师资格证</h4>
              <p>上海师范大学</p>
              <h6>上海</h6>
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
              <h4>BSc. 学士 建筑设施智能技术</h4>
              <p>同济大学同科学院</p>
              <h6>上海</h6>
            </div>
          </div>
        </section>

        <section className='other'>
          <div className='sub-title'>
            <h3>其他特长</h3>
          </div>

          <div className='sub-container'>
            <div className='aside'></div>
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
