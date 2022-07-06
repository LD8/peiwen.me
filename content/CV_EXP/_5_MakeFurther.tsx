import ExternalLink from "../../components/ExternalLink"

const shared = {
  time_period: 'May 2020 - Apr 2021',
  link: (
    <ExternalLink href='http://www.makefurther.com/'>
      makefurther.com
    </ExternalLink>
  ),
} as const

export default {
  EN: {
    company_name: 'MakeFurther IT',
    ...shared,
    jsx_details: (
      <>
        <h4>Web Developer | UI & UX Designer</h4>
        <p>
          Not only did I get to design the interface of
          <em> an innovative B2B quantitative trading system</em> but also to
          code it.
        </p>
        <ul>
          <li>
            <b>Web Dev:</b> build the system with TypeScript, React alongside
            ant-design lib, UmiJS framework
          </li>
          <li>
            <b>UI & UX Design:</b> design web UI based on the requirement doc,
            do compatitive research, prototype with Adobe XD, complete with
            design documents including frontend coding regulations and
            references
          </li>
          <li>
            <b>Execution:</b> lead weekly UI inspection meetings, providing
            chances to revise and to improve the UX
          </li>
          <li>
            <b>Communication:</b> become the tunnels connecting project manager,
            demand sector, frontend leader and backend leader, so projects run
            smoothly
          </li>
        </ul>
        <p>
          Diving in high profile projects immediately after joining the company
          was a challenge. The platform had reached its alpha phase after three
          months of development. Now it has become one of the feature products
          of the company.
        </p>
      </>
    ),
  },
  ZH: {
    company_name: '筹远科技，上海',
    ...shared,
    jsx_details: (
      <>
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
      </>
    ),
  },
} as const
