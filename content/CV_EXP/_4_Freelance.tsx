import ExternalLink from '../../components/ExternalLink'

const link_portfolio = (
  <ExternalLink
    href='https://peiwen.me/work-and-joy'
    style={{ paddingLeft: '6px' }}
  >
    peiwen.me/work
  </ExternalLink>
)

const shared = {
  time_period: 'Jun 2019 - May 2020',
  link: <ExternalLink href='http://peiwen.me'>peiwen.me</ExternalLink>,
} as const

export default {
  EN: {
    company_name: 'Freelance',
    ...shared,
    jsx_details: (
      <>
        <h4>Web Developer | UI & UX Designer</h4>
        <ul>
          <li>Design interactive user-centred interfaces for clients</li>
          <li>Develop web apps independently with React, Django, PostgreSQL</li>
          <li>Iteratively improve UX of an app based on analysed feedbacks</li>
          <li>Portfolio: {link_portfolio}</li>
        </ul>
      </>
    ),
  },
  ZH: {
    company_name: '自由职业，上海',
    ...shared,
    jsx_details: (
      <>
        <h4>用户体验全栈编程</h4>
        <ul>
          <li>以用户为中心设计网站交互界面，根据客户反馈逐步优化性能和体验</li>
          <li>
            应用 React，Django Web 框架，PostgreSQL 等搭建后端 API
            和数据库，独立编写前后端代码
          </li>
          <li>作品展示: {link_portfolio}</li>
        </ul>
      </>
    ),
  },
} as const
