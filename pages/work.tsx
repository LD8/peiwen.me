import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'

const Work: NextPage = () => {
  const router = useRouter()
  useEffect(() => void router.push('/work-and-joy'), [])
  return <Fragment />
}

export default Work
