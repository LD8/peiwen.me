import Head from 'next/head'
import React from 'react'
import { FCwc } from '../types'

type IHeadInfoProps = {
  title?: string
}

const HeadInfo: FCwc<IHeadInfoProps> = ({ title = 'Peiwen.Me', children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='Peiwen is me' />
      <link rel='icon' href='/favicon.ico' />
      {children}
    </Head>
  )
}

export default HeadInfo
