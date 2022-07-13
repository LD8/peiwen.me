import { IObject } from '../types'

/**
 * log the pageview with their URL
 */
export const pageview = (url: string) =>
  window.gtag?.('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })

/**
 * log specific events happening
 * @see Ref: [default_google_analytics_events](https://developers.google.com/analytics/devguides/collection/gtagjs/events#default_google_analytics_events)
 */
export const event = (action: string, params?: IObject) =>
  window.gtag?.('event', action, params)

/**
 * Tools for [Google Analytics](https://analytics.google.com/)
 * @see Ref: [add-google-analytics-to-your-next-js-application](https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/)
 */
const ga = { pageview, event }

export default ga
