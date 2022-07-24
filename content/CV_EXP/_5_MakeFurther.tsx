import ExternalLink from '../../components/ExternalLink'

const shared = {
  time_period: 'May 2020 - Apr 2021',
  link: (
    <ExternalLink href='http://www.makefurther.com/'>
      makefurther.com
    </ExternalLink>
  ),
} as const

const link_yapi = (
  <ExternalLink href='https://github.com/ymfe/yapi'>YApi</ExternalLink>
)

export default {
  EN: {
    company_name: 'MakeFurther IT',
    ...shared,
    jsx_details: (
      <>
        <h4>Front-end Developer | Lead UI & UX Designer</h4>
        <h4 className='sub-h4'>Key Responsibilities</h4>
        <ul>
          <li>
            Carried out competitive research; collaborated with PMs to create
            interactive prototypes with AdobeXD
          </li>
          <li>
            Built innovative web systems in an agile team with TypeScript,
            React, Ant Design, LESS, UmiJS, Apache ECharts; deployed with Docker
          </li>
          <li>
            Designed 20+ API contracts using {link_yapi} and MockJS for fast-paced
            sprints
          </li>
          <li>Led weekly UI inspection meetings to revise/improve UI/UX</li>
          <li>
            Maintained an existing investment platform built with Vue, added 3
            new pages and features
          </li>
        </ul>
        <h4 className='sub-h4'>Key Achievements</h4>
        <ul>
          <li>
            A brand new project - <em>Tactical Trading System</em> - reached its
            alpha phase after one month of design and six months of development
            for a dev team of 5. It has now become one of the feature products
            of the company.
          </li>
          <li>
            Designed a flashy SPA for displaying and monitoring daily investment
            data for Bank of Communications; being the key liaison with the
            client, I led a dev team of 3 to build and install the app within a
            month
          </li>
        </ul>
      </>
    ),
  },
  ZH: {
    company_name: '筹远科技，上海',
    ...shared,
    jsx_details: (
      <>
        <h4>前端开发 | 交互设计师</h4>
        <h4 className='sub-h4'>主要职责</h4>
        <ul>
          <li>参与竞品调研；与项目经理协作，使用 AdobeXD 绘制交互界面</li>
          <li>
            熟练运用 React 和 TypeScript，配合 Ant Design、LESS、ECharts、UmiJS
            等库和框架，高效完成敏捷开发任务；使用 Docker 发布
          </li>
          <li>使用 {link_yapi} 和 MockJS 来定义接口，提高开发效率</li>
          <li>开展每周 UI 走查，确保团队高效实现设计，并收集反馈优化 UI/UX</li>
          <li>使用 Vue 框架维护现有的投资系统后台，增加新的页面表格和功能</li>
        </ul>
        <h4 className='sub-h4'>主要成就</h4>
        <ul>
          <li>
            为交通银行量身打造了一款酷炫的
            SPA，用来进行内部投资大数据展示和监控；设计通过后，作为与交行的关键联络人，带领广州两名队友在一个月内完成了网站建设
          </li>
          <li>
            入职开始担任旗舰产品设计，经过 1 个月设计，6
            个月开发后，一个具有复杂交互界面的 "策略交易系统"
            基本成型；如今已成为公司自研主打产品之一
          </li>
        </ul>
      </>
    ),
  },
} as const

// export default {
//   EN: {
//     company_name: 'MakeFurther IT',
//     ...shared,
//     jsx_details: (
//       <>
//         <h4>Web Developer | UI & UX Designer</h4>
//         <p>
//           <b>
//             Not only did I get to design the interface of an innovative B2B
//             <em> Tactical Trading System</em> but also to code it.
//           </b>
//         </p>
//         <ul>
//           <li>
//             <b>UI & UX Design:</b> do compatitive research, prototype with Adobe
//             XD and complete with design documents
//           </li>
//           <li>
//             <b>Web Dev:</b> build the system with TypeScript, React alongside
//             ant-design lib, UmiJS framework
//           </li>
//           <li>
//             <b>Execution:</b> lead weekly UI inspection meetings, providing
//             chances to revise and to improve UX; make frontend coding
//             regulations
//           </li>
//           <li>
//             <b>Communication:</b> become a tunnel connecting project manager,
//             demand sector, frontend and backend teams, so projects could run
//             smoothly
//           </li>
//         </ul>
//         <p>
//           Diving in high profile projects immediately after joining the company
//           was a challenge. The product reached its alpha phase after 3 months of
//           dev. Now, it has become one of the feature products of the company.
//         </p>
//       </>
//     ),
//   },
//   ZH: {
//     company_name: '筹远科技，上海',
//     ...shared,
//     jsx_details: (
//       <>
//         <h4>前端开发 | 交互设计</h4>
//         <p>
//           <b>兼顾交互界面的设计和前端代码编写</b>
//         </p>
//         <ul>
//           <li>
//             <b>交互设计：</b>
//             开展竞品调研，帮助确定需求，使用 Adobe XD 绘制交互界面，撰写设计说明
//           </li>
//           <li>
//             <b>网页开发：</b>
//             高效完成开发，熟练运用 React 和 TypeScript，配合 antd、UmiJS
//             等库和框架
//           </li>
//           <li>
//             <b>融合实施：</b>每周例行 UI 走查评审，优化
//             UX，参与制定前端代码规范等，确保团队高效地实现设计
//           </li>
//           <li>
//             <b>沟通工作：</b>
//             成为需求、PM、前后端沟通的桥梁，提高产品完成度
//           </li>
//         </ul>
//         <p>
//           入职之初便担任旗舰产品设计，三个月后，一个具有复杂交互界面的
//           <b>
//             <em> 策略交易系统 </em>
//           </b>
//           基本成型，如今成为公司自研主打产品之一
//         </p>
//       </>
//     ),
//   },
// } as const
