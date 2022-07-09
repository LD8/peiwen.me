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
        <ul>
          <li>
            <b>Responsible</b> for the front-end development of a
            <em> Root Cause Analysis System</em> amongst other web apps for SRE
            team
          </li>
          <li>
            <b>Research</b> the habits of the clients (TDOs); subsequently,
            introduce new solutions to improve the usability of the apps
          </li>
          <li>
            <b>Challenges</b> are mainly derived from the question of how to
            finetune the ways in which relevant data is visualised
          </li>
        </ul>
        <p>
          Taking over a complicated pre-exisiting project is never easy.
          However, after a couple of months, having rewritten the entire system,
          our clients claimed that the appearance as well as the usability of
          the app had been drastically improved, more <em>'professional'</em> so
          to speak. Taking users' needs into account, the project is constently
          evolving.
        </p>
      </>
    ),
  },
  ZH: {
    ...shared,
    jsx_details: (
      <>
        <h4>前端工程师 | 交互设计</h4>
        <ul>
          <li>
            <b>网页应用开发：</b>使用 React 技术栈升级现有
            <em> 根因分析系统 </em>；为 SRE 团队开发新的前端网页应用
          </li>
          <li>
            <b>调研和收集</b>用户(TDO)使用习惯；根据调研结果提升产品的易用性
          </li>
          <li>
            <b>挑战</b>在于根据不断变化的需求持续优化数据展示形式
          </li>
        </ul>
        <p>
          在接手根因分析项目几个月后，用户普遍反应界面易用度显著提高，也更
          <em> “专业” </em>
          了；之后用模块化思路重写整个项目，提升可维护度，新功能也以模块化的形式开发、上线、迭代；将用户的需要放在首位，新老产品能够快速有效迭代
        </p>
      </>
    ),
  },
} as const
