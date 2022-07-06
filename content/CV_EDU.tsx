import ExternalLink from '../components/ExternalLink'

const CV_EDU = [
  {
    time_period: '2018 - 2020',
    link: (
      <>
        <ExternalLink href='http://www.interaction-design.org'>
          interaction-design.org
        </ExternalLink>
        <br />
        <ExternalLink href='http://www.freecodecamp.com'>
          freecodecamp.com
        </ExternalLink>
      </>
    ),
    jsx_details_EN: (
      <>
        <h4>Frontend Programmer Certificate, UI Design Practice</h4>
        <p>FreeCodeCamp, Interaction Design Foundation</p>
        <h6>Online / self-taught</h6>
      </>
    ),
    jsx_details_ZH: (
      <>
        <h4>前端开发资格证，UI设计</h4>
        <p>FreeCodeCamp, Interaction Design Foundation</p>
        <h6>网络资源</h6>
      </>
    ),
  },
  {
    time_period: '2014 - 2016',
    link: <ExternalLink href='http://www.arts.ac.uk'>arts.ac.uk</ExternalLink>,
    jsx_details_EN: (
      <>
        <h4>MA. in Art and Science</h4>
        <p>Central Saint Martins, University of Arts London</p>
        <h6>London, UK</h6>
      </>
    ),
    jsx_details_ZH: (
      <>
        <h4>MA. 硕士 艺术与科学</h4>
        <p>中央圣马丁，伦敦艺术大学学院</p>
        <h6>英国伦敦</h6>
      </>
    ),
  },
  {
    time_period: '2013 - 2014',
    link: <ExternalLink href='http://www.csvpa.com'>csvpa.com</ExternalLink>,
    jsx_details_EN: (
      <>
        <h4>Pre MA.</h4>
        <p>Cambridge School of Visual and Performing Arts</p>
        <h6>Cambridge, UK</h6>
      </>
    ),
    jsx_details_ZH: (
      <>
        <h4>Pre MA. 硕士预科</h4>
        <p>剑桥艺术与表演学校</p>
        <h6>英国剑桥</h6>
      </>
    ),
  },
  {
    time_period: '2009 - 2011',
    link: (
      <ExternalLink href='http://www.shnu.edu.cn'>shnu.edu.cn</ExternalLink>
    ),
    jsx_details_EN: (
      <>
        <h4>Certificate - Interior Design</h4>
        <p>Shanghai Normal university</p>
        <h6>Shanghai, China</h6>
      </>
    ),
    jsx_details_ZH: (
      <>
        <h4>室内设计师资格证</h4>
        <p>上海师范大学</p>
        <h6>上海</h6>
      </>
    ),
  },
  {
    time_period: '2006 - 2010',
    link: (
      <ExternalLink href='http://www.tongji.edu.cn'>tongji.edu.cn</ExternalLink>
    ),
    jsx_details_EN: (
      <>
        <h4>Diploma - Intelligent building and Technology</h4>
        <p>Tongji University</p>
        <h6>Shanghai, China</h6>
      </>
    ),
    jsx_details_ZH: (
      <>
        <h4>BSc. 学士 建筑设施智能技术</h4>
        <p>同济大学同科学院</p>
        <h6>上海</h6>
      </>
    ),
  },
] as const

export default CV_EDU
