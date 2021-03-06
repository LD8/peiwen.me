import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import HeadInfo from '../components/HeadInfo'
import LeafSwirl from '../components/LeafSwirl'

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => void router.prefetch('/work-and-joy'), [])
  return (
    <StyledContainer>
      <HeadInfo />
      <LeafSwirl />
      <div className='quote'>
        <p>
          "As one looked at that dead leaf with all its beauty and color, maybe
          one would very deeply comprehend, be aware of, what one's own death
          must be, not at the very end but at the very beginning"
        </p>
        <p style={{ marginBottom: 0 }}>- Krishnamurti -</p>
        <p>1984</p>
      </div>
    </StyledContainer>
  )
}

export default Home

const StyledContainer = styled.div`
  cursor: default;
  align-self: center;
  display: flex;
  justify-content: center;

  text-align: center;
  margin-top: auto;
  padding: 0 30px 30px 30px;
  max-width: 850px;
  transition: all 300ms ease-out 300ms;
  // DO NOT DELETE THIS LINE ↓, for some reason it keeps footer sticky
  line-height: 1rem;

  .quote {
    p {
      line-height: 1.2rem;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 600px) and (max-height: 800px) {
      display: none;
    }
    @media screen and (max-width: 914px) and (max-height: 450px) and (orientation: landscape) {
      display: none;
    }
  }
`
