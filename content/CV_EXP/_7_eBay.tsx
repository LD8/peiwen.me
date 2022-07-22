import ExternalLink from '../../components/ExternalLink'

const shared = {
  company_name: 'eBay',
  time_period: 'Sept 2021 - Now',
  link: <ExternalLink href='https://ebay.com/'>eBay.com</ExternalLink>,
} as const

export default {
  EN: {
    ...shared,
    jsx_details: (
      <>
        <h4>Front-end Engineer | UX Designer</h4>
        <h4 className='sub-h4'>Key Responsibilities</h4>
        <ul>
          <li>Worked in an agile environment with weekly stand-ups</li>
          <li>
            Created new apps using React, TypeScript, Ant Design, ECharts, LESS
            for Site Reliability Engineering team to monitor or remediate pool
            health
          </li>
          <li>
            Upgraded projects to the latest React tech stack, TypeScript;
            improved their maintainability
          </li>
          <li>
            Added new features to projects based on feedbacks from the clients
            (TDOs), constantly improving the usability of the apps
          </li>
        </ul>
        <h4 className='sub-h4'>Key Achievements</h4>
        <ul>
          <li>
            Modernised a <em>Root Cause Analysis</em> System with reusable
            TypeScripted declarative React components in proper compositional
            structures
          </li>
          <li>
            After a couple of months I took over the RCA project, the clients
            claimed that the usability of the app had been drastically improved,
            and the appearance was much more professional
          </li>
          <li>
            Finetuned the ways in which relevant data was visualised in graphs
          </li>
        </ul>
      </>
    ),
  },
  ZH: {
    ...shared,
    jsx_details: (
      <>
        <h4>前端工程师 | 交互设计</h4>
        <h4 className='sub-h4'>主要职责</h4>
        <ul>
          <li>在敏捷开发环境中进行 SRE 团队的产品迭代</li>
          <li>
            使用 React, TypeScript, Ant Design, ECharts, LESS 为 SRE
            团队开发网页应用，以便监控服务池状态或及时找到原因进行补救
          </li>
          <li>
            用最新的 React 技术栈和 TypeScript
            升级现有产品的过时技术，提高可维护度
          </li>
          <li>根据调研和收集来的用户(TDO)反馈，持续迭代和提升产品的易用性</li>
        </ul>
        <h4 className='sub-h4'>主要成就</h4>
        <ul>
          <li>
            在接手一个叫"归因分析"的项目几个月后，用户普遍反应产品更好用更“专业”
            了；随后，又用 TypeScript
            重写了整个项目，提升了可维护度，新功能也更容易以模块化的形式新增和迭代
          </li>
        </ul>
      </>
    ),
  },
} as const

// export default {
//   EN: {
//     ...shared,
//     jsx_details: (
//       <>
//         <h4>Front-end Engineer | UX Designer</h4>
//         <ul>
//           <li>
//             <b>Responsible</b> for the front-end development of a
//             <em> Root Cause Analysis System</em> amongst other web apps for SRE
//             team
//           </li>
//           <li>
//             <b>Research</b> the habits of the clients (TDOs); subsequently,
//             introduce new solutions to improve the usability of the apps
//           </li>
//           <li>
//             <b>Challenges</b> are mainly derived from the question of how to
//             finetune the ways in which relevant data is visualised
//           </li>
//         </ul>
//         <p>
//           Taking over a complicated pre-exisiting project is never easy.
//           However, after a couple of months, having rewritten the entire system,
//           our clients claimed that the appearance as well as the usability of
//           the app had been drastically improved, more <em>'professional'</em> so
//           to speak. Taking users' needs into account, the project is constently
//           evolving.
//         </p>
//       </>
//     ),
//   },
//   ZH: {
//     ...shared,
//     jsx_details: (
//       <>
//         <h4>前端工程师 | 交互设计</h4>
//         <ul>
//           <li>
//             <b>网页应用开发：</b>使用 React 技术栈升级现有
//             <em> 根因分析系统 </em>；为 SRE 团队开发新的前端网页应用
//           </li>
//           <li>
//             <b>调研和收集</b>用户(TDO)使用习惯；根据调研结果提升产品的易用性
//           </li>
//           <li>
//             <b>挑战</b>在于根据不断变化的需求持续优化数据展示形式
//           </li>
//         </ul>
//         <p>
//           在接手根因分析项目几个月后，用户普遍反应界面易用度显著提高，也更
//           <em> “专业” </em>
//           了；之后用模块化思路重写整个项目，提升可维护度，新功能也以模块化的形式开发、上线、迭代；将用户的需要放在首位，新老产品能够快速有效迭代
//         </p>
//       </>
//     ),
//   },
// } as const
