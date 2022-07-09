import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import HeadInfo from '../../components/HeadInfo'

const galleryPath = '/experimental-photography/gallery'

const ExperimentalPhotography: NextPage = () => {
  const router = useRouter()
  const [hovering, setHov] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (hovering) {
      const id = setTimeout(() => setMounted(false), 5100)
      return () => clearTimeout(id)
    }
  }, [hovering])
  useEffect(() => {
    let id: NodeJS.Timeout
    if (!mounted) {
      id = setTimeout(() => router.push(galleryPath), 1100)
    }
    return () => clearTimeout(id)
  }, [mounted])

  return (
    <>
      <HeadInfo title='Don Lee - Experimental Photography' />
      <StyledHome
        hovering={hovering}
        onMouseOver={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <StyledMask mounted={mounted} onClick={() => setMounted(false)} />
      </StyledHome>
    </>
  )
}
export default ExperimentalPhotography

const StyledHome = styled.div<{ hovering: boolean }>`
  background-image: url('/experimental-photography/crumpled_chance.jpg');
  height: 100vh;
  width: 100vw;
  background-position: center;

  background-size: 100%;
  transition: all 1s ease-in-out;
  ${({ hovering }) =>
    hovering &&
    css`
      background-size: 500%;
      transition: all 5s ease-in-out 300ms;
    `}
`

const StyledMask = styled.div<{ mounted: boolean }>`
  height: 100vh;
  width: 100vw;
  position: absolute;
  cursor: pointer;
  top: 0;
  background-color: black;
  opacity: ${({ mounted }) => (mounted ? 0 : 1)};
  transition: all 1s ease-in-out;
`
