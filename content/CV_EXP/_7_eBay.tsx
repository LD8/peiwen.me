import ExternalLink from '../../components/ExternalLink'

const shared = {
  company_name: 'eBay',
  time_period: 'Sept 2021 - Now',
  link: <ExternalLink href='https://ebay.com/'>eBay.com</ExternalLink>,
} as const

export default {
  EN: {
    ...shared,
    jsx_details: (
      <>
        <h4>Front-end Engineer | UX Designer</h4>
        <ul>
          <li>
            <b>Responsible</b> for the front-end development of a root cause
            analysis system apart from developing other web apps for SRE team
          </li>
          <li>
            <b>Research</b> the habbit of the clients (TDOs); subsequently,
            propose new solutions to improve the usability of the apps
          </li>
          <li>
            <b>Challenges</b> are mainly derived from the question of how to
            finetune the ways in which relevant data is visualised
          </li>
        </ul>
        <p>
          Taking over a complicated pre-exisiting project is never easy.
          However, after a couple of months, our clients claimed that the
          appearance as well as the usability of the app had been drastically
          improved. Taking users' needs into account, the project is constently
          evolving.
        </p>
      </>
    ),
  },
  ZH: {
    ...shared,
    jsx_details: (
      <>
        <h4>前端工程师 | 交互设计</h4>
        <ul>
          <li>
            <b>Responsible</b> for the front-end development of a root cause
            analysis system apart from developing other web apps for SRE team
          </li>
          <li>
            <b>Research</b> the habbit of the clients (TDOs); subsequently,
            propose new solutions to improve the usability of the apps
          </li>
          <li>
            <b>Challenges</b> are mainly derived from the question of how to
            finetune the ways in which relevant data is visualised
          </li>
        </ul>
        <p>
          Taking over a complicated pre-exisiting project is never easy.
          However, after a couple of months, our clients claimed that the
          appearance as well as the usability of the app had been drastically
          improved. Taking users' needs into account, the project is constently
          evolving.
        </p>
      </>
    ),
  },
} as const
