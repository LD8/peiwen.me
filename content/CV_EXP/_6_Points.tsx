import ExternalLink from '../../components/ExternalLink'

const shared = {
  time_period: 'Apr 2021 - Sept 2021',
  link: <ExternalLink href='https://points.org/'>points.org</ExternalLink>,
} as const

export default {
  EN: {
    company_name: 'Points',
    ...shared,
    jsx_details: (
      <>
        <h4>Front-end Engineer | UX Designer</h4>
        <h4 className='sub-h4'>Key Responsibilities</h4>
        <ul>
          <li>
            Customised UmiJS, a React framework, to provide technology solutions
            for a data sharing platform; also employed Ant Design and LESS for
            styling, Grunt for compiling and minifying LESS files for light and
            dark themes
          </li>
          <li>
            Collaborated with PM and the UI team to analyse user's needs,
            producing high fidelity wireframes, striving to elevate the starting
            point of the UX
          </li>
          <li>Assessed UI designs for technical feasibility</li>
        </ul>
        <h4 className='sub-h4'>Key Achievements</h4>
        <ul>
          <li>
            Completed a frontend architecture to facilitate B2B
            <em> Private Data Computing and Safely Sharing </em> with an
            extendable authentication (user-role based) system and a
            machine-learning job management system
            {/* ; designed a modularised functional page plugin system. */}
          </li>
        </ul>
      </>
    ),
  },
  ZH: {
    company_name: '光之树科技，上海',
    ...shared,
    jsx_details: (
      <>
        <h4>前端工程师 | 交互设计</h4>
        <h4 className='sub-h4'>主要职责</h4>
        <ul>
          <li>
            为产品需求量身打造可扩展的前端后台服务框架，改造了 UmiJS
            框架，并运用 Ant Design、LESS、Grunt 打包（黑白两种 LESS
            样式）实现简洁现代的界面
          </li>
          <li>
            帮助产品经理分析、整理用户需求，结合需求与 UI
            团队一起修改设计，让产品的用户体验站在更高的起点
          </li>
          <li>评估 UI 设计的技术可行性，用更简单的方法实现同样效果的设计</li>
        </ul>
        <h4 className='sub-h4'>主要成就</h4>
        <ul>
          <li>
            在半年内研发出了一个全新的的 B2B "隐私计算平台"
            框架，具有灵活的角色鉴权系统和机器学习任务管理系统，兼具优异的可扩展性
          </li>
        </ul>
      </>
    ),
  },
} as const

// export default {
//   EN: {
//     company_name: 'Points',
//     ...shared,
//     jsx_details: (
//       <>
//         <h4>Front-end Engineer | UX Designer</h4>
//         <p>
//           <b>
//             A <em>Privacy Computing Platform</em> built with custimised UmiJS
//             framework (TypeScript) came to live during this fast-paced yet
//             fulfilling period.
//           </b>
//         </p>
//         <ul>
//           <li>
//             <b>Responsible</b> for the front-end development of a brand new
//             product
//           </li>
//           <li>
//             <b>UX Design:</b> consolidate the requirements of the product by
//             analysing the needs of the end-users; then, collaborate with UI team
//             to optimise the overall UX of the app
//           </li>
//           <li>
//             <b>Challenges:</b> figure out ways to build it efficiently while
//             maintaining a predetermined design language
//           </li>
//         </ul>
//         <p>
//           This role emphasises the technical craftsmanship of the front-end
//           development, offering the chance to work with different teams to
//           finalise the requirements of the product for UX optimisation purposes.
//         </p>
//       </>
//     ),
//   },
//   ZH: {
//     company_name: '光之树科技，上海',
//     ...shared,
//     jsx_details: (
//       <>
//         <h4>前端负责人 | 交互设计</h4>
//         <p>
//           <b>
//             一个全新的、可扩展的 <em>隐私计算平台</em> 在半年中被研发出来
//           </b>
//         </p>
//         <ul>
//           <li>
//             <b>网页应用开发：</b>
//             负责开发全新的产品页面，一手操办从前端框架选择、页面逻辑代码撰写、落实页面
//             UI、到最终 UX 优化的全过程
//           </li>
//           <li>
//             <b>界面设计：</b>配合 UI
//             团队完成页面的样式设计，优化用户体验，更重要的是帮助前端小伙伴以更便捷的方式实现同样效果的设计
//           </li>
//           <li>
//             <b>沟通协调：</b>
//             需与 PM 和 UI 团队分析讨论，得出相应的前端解决方案
//           </li>
//         </ul>
//         <p>
//           更侧重于<b>前端技术方面的研究和精进</b>
//           ，同时帮助产品经理完成项目逻辑梳理，明确需求以便优化用户体验
//         </p>
//       </>
//     ),
//   },
// } as const
