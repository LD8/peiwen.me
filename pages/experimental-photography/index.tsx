import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import HeadInfo from '../../components/HeadInfo'
import { useHoverRef } from '../../lib/hooks'

const galleryPath = '/experimental-photography/gallery'

const ExperimentalPhotography: NextPage = () => {
  const router = useRouter()
  const [hovering, refDiv] = useHoverRef()

  useEffect(() => {
    if (hovering) {
      const id = setTimeout(() => router.push(galleryPath), 5100)
      return () => clearTimeout(id)
    }
  }, [hovering])
  return (
    <>
      <HeadInfo title='Don Lee - Experimental Photography' />
      <StyledHome ref={refDiv} onClick={() => router.push(galleryPath)} />
    </>
  )
}

export default ExperimentalPhotography

const StyledHome = styled.div`
  background-image: url('/experimental-photography/crumpled_chance.jpg');
  height: 100vh;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover {
    transition: all 5s ease-in-out 500ms;
    transform: scale(5);
  }
`
