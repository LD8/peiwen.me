import ExternalLink from "../../components/ExternalLink"

const shared = {
  time_period: 'Jun 2017 - Jun 2019',
  link: <ExternalLink href='https://www.acgorg.com/'>acgorg.com</ExternalLink>,
} as const

export default {
  EN: {
    company_name: 'ACG International',
    ...shared,
    jsx_details: (
      <>
        <h4>Instructor — Art and Design</h4>
        <ul>
          <li>
            Teach applied arts, primarily interior design and analogue
            photography process, to students who seek academic development in
            related subjects
          </li>
          <li>Develop curriculum and prepare outlines for workshops</li>
          <li>Provide individualised tutorial or remedial instruction</li>
          <li>Supervise independent projects and hands-on training</li>
          <li>Advise students on program curricula and career decisions</li>
        </ul>
        <p>
          In these two years as a teacher, 32 amongst 34 of my students have
          successfully secured offers from prestigious art institutions across
          UK, France, US, Canada, Australia, students majored in Interior
          design, photography and landscape design both on BA level (40%) and MA
          level (60%). While helping my lovely students embarking on their great
          journey, for consistently growing interests, I had been studying
          programming since 2015
        </p>
      </>
    ),
  },
  ZH: {
    company_name: '环球艺盟，上海',
    ...shared,
    jsx_details: (
      <>
        <h4>艺术与设计导师</h4>
        <ul>
          <li>教授15至24岁年龄段的艺术学生室内设计初级以及传统摄影技法</li>
          <li>帮助学生建立自己的独立作品集</li>
          <li>帮助学生申请国际艺术院校</li>
          <li>设计新的课程大纲、测试及应用在教学中</li>
          <li>提供根据学生个体情况的个别指导，鼓励学生独立动手完成项目</li>
          <li>提供必要的职业规划建议和指导</li>
        </ul>
        <p>
          在这两年的教学生涯中，经手34位学生，有32位申请上重点艺术院校，申请科目包括室内设计、摄影、景观设计，申请国家包括英国、法国、澳大利亚、美国、加拿大等，英联邦居多，其中申请本科的学生占40%，申请硕士的学生占60%；帮助学生申请到理想的院校、获得巨大的成就感的同时，2016年出于浓厚的兴趣，开始自学网页方向的编程
        </p>
      </>
    ),
  },
} as const
