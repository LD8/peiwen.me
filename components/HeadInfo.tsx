import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { FCwc } from '../types'

type IHeadInfoProps = {
  title?: string
  description?: string
  noRoboIndex?: boolean
  // with dynamic pages, router.pathname is /pathname/[slug], so path need to be specified
  path?: string
}

/**
 * The central control module of header information
 */
const HeadInfo: FCwc<IHeadInfoProps> = ({
  title = 'Li · Peiwen',
  description = "Peiwen Li's website, featuring his work and journals. Let there be more software that brings peace and harmony to the world",
  noRoboIndex = false,
  // only needed in dynamic routes
  path,
  children,
}) => {
  const router = useRouter()
  return (
    <Head>
      {noRoboIndex && <meta name='robots' content='noindex' />}
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon_256x256.ico'
      />

      {/* og */}
      <meta property='og:site_name' content={title} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/favicon_256x256.ico' />
      <meta property='og:image:type' content='image/ico' />
      <meta property='og:image:width' content='256' />
      <meta property='og:image:height' content='256' />
      <meta property='og:type' content='website' />
      <meta property='og:updated_time' content={String(Date.now())} />
      <meta
        property='og:url'
        content={`https://peiwen.me${path || router.pathname}`}
      />

      <title>{title}</title>
      {children}
    </Head>
  )
}

export default HeadInfo
