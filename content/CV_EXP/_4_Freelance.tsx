import ExternalLink from '../../components/ExternalLink'

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
          <li>
            Design interactive interfaces for clients based on their needs
          </li>
          <li>Develop web apps independently with React, Django, PostgreSQL</li>
          <li>
            Iteratively improve the UX of an app based on analysed feedbacks
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
          <li>
            根据客户的商业模式和规模设计网站交互界面，搭建后端API和数据库，独立编写代码
          </li>
          <li>
            主要应用JavaScript (React)和Python，Django Web框架，PostgreSQL
          </li>
          <li>
            作品展示：
            <ExternalLink
              href='https://peiwen.me/work-and-joy'
              style={{ paddingLeft: '6px' }}
            >
              peiwen.me/work
            </ExternalLink>
          </li>
        </ul>
      </>
    ),
  },
} as const
