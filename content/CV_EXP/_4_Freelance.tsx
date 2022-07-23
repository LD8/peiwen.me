import ExternalLink from '../../components/ExternalLink'

const link_work = (
  <ExternalLink
    href='https://peiwen.me/work-and-joy'
    style={{ paddingLeft: '6px' }}
  >
    https://peiwen.me/work-and-joy
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
        <h4>Full-stack Developer | UI & UX Designer</h4>
        <ul>
          <li>Designed wireframes and interactive prototypes with AdobeXD</li>
          <li>
            Built approved UI with HTML, CSS, SASS, Bootstrap, JavaScript, React
          </li>
          <li>Built back-end with Python, Django framework and PostgreSQL</li>
          <li>Improved the UX of an app iteratively based on analysed feedbacks</li>
          <li>Portfolio: {link_work}</li>
        </ul>
      </>
    ),
  },
  ZH: {
    company_name: '自由职业，上海',
    ...shared,
    jsx_details: (
      <>
        <h4>全栈开发 | 交互设计师</h4>
        <ul>
          <li>以用户为中心，使用 AdobeXD 绘制可交互的网站原型</li>
          <li>
            独立进行前端开发：使用 HTML, CSS, SASS, Bootstrap, JavaScript, React
          </li>
          <li>独立进行后端开发：使用 Python Django 和 PostgreSQL 搭建后端服务</li>
          <li>分析用户反馈进行迭代，优化性能和体验</li>
          <li>作品展示: {link_work}</li>
        </ul>
      </>
    ),
  },
} as const
