import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'
import HeadInfo from '../components/HeadInfo'

const Work: NextPage = () => {
  const router = useRouter()
  useEffect(() => void router.push('/work-and-joy'), [])
  return (
    <>
      <HeadInfo
        title="Peiwen's work and joy"
        description="Peiwen Li's Project list, Projects built with JavaScript libraries and Python frameworks from 2015 to date"
      />
    </>
  )
}

export default Work
