import ExternalLink from '../../components/ExternalLink'

const shared = {
  time_period: 'May - Nov 2015',
  link: <ExternalLink href='https://www.bl.uk/'>bl.uk</ExternalLink>,
} as const

export default {
  EN: {
    company_name: 'British Library',
    ...shared,
    jsx_details: (
      <>
        <h4>Volunteer Interpreter</h4>
        <p>
          Translating over 100 copies of Chinese minority music manuscripts is a
          privilege, for having participated in the dissemination of Chinese
          minority culture on an international stage
        </p>
        {/* <p>
          Interpreting Chinese minority manuscripts (mainly scores). Only after
          being interpreted in Pinyin can they be further studied. Nearly 100
          scripts were translated in half year. I am thrilled to have
          participated in the dissemination of Chinese minority culture on an
          international stage
        </p> */}
      </>
    ),
  },
  ZH: {
    company_name: '大英图书馆，伦敦',
    ...shared,
    jsx_details: (
      <>
        <h4>中国少数民族文献手稿翻译志愿者</h4>
        <p>
          总计翻译将近一百页苗族、土家族等中国少数民族曲谱手稿，希望能促进中国少数民族文化在国际舞台上的研究和传播
        </p>
        {/* <p>
          翻译苗族、土家族等中国少数民族的曲谱手稿，大部分手稿经过注音可后续被专业人员进行理解和分析。总计翻译将近一百页文献，希望能通过此举促进中国少数民族文化在国际上的传播和研究
        </p> */}
      </>
    ),
  },
} as const
