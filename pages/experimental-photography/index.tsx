import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import HeadInfo from '../../components/HeadInfo'

const ExperimentalPhotography: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <HeadInfo title={`Don Lee - Experimental Photography`} />
      <StyledHome
        onClick={() => router.push('/experimental-photography/gallery')}
      />
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
