import ExternalLink from '../../components/ExternalLink'

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
        <p>
          In these rewarding years as a teacher, 32 amongst 34 of my students
          have successfully secured offers from prestigious art institutions
          across UK, France, US, Canada, Australia, students majored in Interior
          design, photography and landscape design both on BA level (40%) and MA
          level (60%).
        </p>
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
          While helping my lovely students embarking on their great journey,{' '}
          <b>
            for consistently growing interests, I had been studying programming
            since 2015
          </b>
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
        <p>
          在这两年的教学生涯中，共教授 34 位学生，有 32 位申请上重点艺术院校，申请科目包括室内设计、摄影、景观设计，申请国家包括英国、法国、澳大利亚、美国、加拿大等，英联邦居多，其中申请本科的学生约占四成，申请硕士的学生约占六成；
        </p>
        <ul>
          <li>主要教授室内设计基础和传统摄影技法</li>
          <li>帮助学生创作独立作品集，提供职业规划、择校建议等</li>
          <li>设计新的课程大纲、测试及应用在教学中</li>
        </ul>
        <p>
          帮助学生申请到理想的院校、获得巨大的成就感的同时，
          <b>出于浓厚的兴趣， 自2015年起，开始自学编程</b>
        </p>
      </>
    ),
  },
} as const
