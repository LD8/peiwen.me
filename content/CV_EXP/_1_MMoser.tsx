import ExternalLink from '../../components/ExternalLink'

const shared = {
  time_period: 'May 2011 - May 2013',
  link: <ExternalLink href='https://www.mmoser.com'>mmoser.com</ExternalLink>,
} as const

export default {
  EN: {
    company_name: 'M Moser Associates',
    ...shared,
    jsx_details: (
      <>
        <h4>Project Coordinator and Interior Designer</h4>
        <p>
          Started off as a project coordinator, soon worked my way up, designing
          the whole project, delivering numerous projects (more than 5000 sqm in
          total).
        </p>
        <p>
          <b>
            The universal design patterns and principles I learned back then are still
            applicable to the UI/UX design now.
          </b>
        </p>
        {/* <p>
          From a project coordinator to a designer who leads a small team, my
          skills and duties had grown from drawing draft plans to:
        </p>
        <ul>
          <li>putting together project presentations</li>
          <li>presenting design ideas to clients in presentations</li>
          <li>on site construction management</li>
        </ul>
        <p>
          Delivered numerous projects (more than 5000 sqm in total), all of
          which were on schedule.
        </p> */}
      </>
    ),
  },
  ZH: {
    company_name: '穆氏建筑，上海',
    ...shared,
    jsx_details: (
      <>
        <h4>室内设计师 | 项目管理</h4>
        <p>
          从项目协调成长为设计师，<b>设计的通用性使我受益至今</b>
          ；工作期间共计完成 5000 余平米的办公室设计和施工工程，均顺利如期完成
        </p>
        {/* <p>从项目协调员成长为设计师，职责也在不断变化，包括</p>
        <ul>
          <li>绘制项目草图和施工图</li>
          <li>制作招投标文件，设计汇报演示文稿PPT</li>
          <li>向客户传达设计核心理念，后续与客户沟通设计进展</li>
          <li>与现场工程师协调，确保设计与质量的一致性</li>
          <li>与现场项目监理协调，确保项目如期完工</li>
        </ul> */}
      </>
    ),
  },
} as const
