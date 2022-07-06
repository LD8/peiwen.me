import ExternalLink from "../../components/ExternalLink"

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
        <p>
          <em>A privacy computing platform</em> built with custimised UmiJS
          framework (TypeScript) came to live during this fast-paced yet
          fulfilling period.
        </p>
        <ul>
          <li>
            <b>Responsible</b> for the front-end development of a brand new
            product
          </li>
          <li>
            <b>UX Design:</b> consolidate the requirements of the product by
            analysing the needs of the end-users; then, collaborate with UI team
            to optimise the overall UX of the app
          </li>
          <li>
            <b>Challenges:</b> figure out ways to build it efficiently while
            maintaining a predetermined design language
          </li>
        </ul>
        <p>
          This role emphasises the technical craftsmanship of the front-end
          development, offering the chance to work with different teams to
          finalise the requirements of the product for UX optimisation purposes.
        </p>
      </>
    ),
  },
  ZH: {
    company_name: '光之树科技，上海',
    ...shared,
    jsx_details: (
      <>
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
      </>
    ),
  },
} as const
