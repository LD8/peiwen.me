import ExternalLink from '../../components/ExternalLink'

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
          <b>
            Not only did I get to design the interface of an innovative B2B
            <em> Quantitative Trading System</em> but also to code it.
          </b>
        </p>
        <ul>
          <li>
            <b>UI & UX Design:</b> do compatitive research, prototype with Adobe
            XD and complete with design documents
          </li>
          <li>
            <b>Web Dev:</b> build the system with TypeScript, React alongside
            ant-design lib, UmiJS framework
          </li>
          <li>
            <b>Execution:</b> lead weekly UI inspection meetings, providing
            chances to revise and to improve UX; make frontend coding
            regulations
          </li>
          <li>
            <b>Communication:</b> become a tunnel connecting project manager,
            demand sector, frontend and backend teams, so projects could run
            smoothly
          </li>
        </ul>
        <p>
          Diving in high profile projects immediately after joining the company
          was a challenge. The product reached its alpha phase after 3 months of
          dev. Now, it has become one of the feature products of the company.
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
        <p>
          <b>兼顾交互界面的设计和前端代码编写</b>
        </p>
        <ul>
          <li>
            <b>交互设计：</b>
            开展竞品调研，帮助确定需求，使用 Adobe XD 绘制交互界面，撰写设计说明
          </li>
          <li>
            <b>网页开发：</b>
            高效完成开发，熟练运用 React 和 TypeScript，配合 antd、UmiJS
            等库和框架
          </li>
          <li>
            <b>融合实施：</b>每周例行 UI 走查评审，优化
            UX，参与制定前端代码规范等，确保团队高效地实现设计
          </li>
          <li>
            <b>沟通工作：</b>
            成为需求、PM、前后端沟通的桥梁，提高产品完成度
          </li>
        </ul>
        <p>
          入职之初便担任旗舰产品设计，三个月后，一个具有复杂交互界面的
          <b>
            <em> 网页量化交易系统 </em>
          </b>
          基本成型，如今成为公司自研主打产品之一
        </p>
      </>
    ),
  },
} as const
