import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import HeadInfo from '../components/HeadInfo'
import Input from '../components/Input'
import { oli, useIsLi } from '../lib/hooks/useGuard'
import snatch from '../lib/snatch'
import { TSLi } from './api/li'
import styled from 'styled-components'
import rebuildPage, { IParamsRevalidate } from '../lib/rebuildPage'

/**
 * LogIn for Peiwen Li PERSONALLY
 */
const Li: NextPage = () => {
  const isLi = useIsLi()
  return (
    <>
      <HeadInfo title="Peiwen Li's Personal page" noRoboIndex />
      {isLi ? <ContentIsLi /> : <ContentIsNotLi />}
    </>
  )
}

export default Li

const StyledContainer = styled.div`
  max-width: 600px;
  text-align: center;
  width: 100%;
  flex: 1;

  > h1 {
    font-size: 5vh;
    font-family: cursive;
    cursor: pointer;
    letter-spacing: 3px;
    :hover {
      color: grey;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
  > h3 {
    font-size: 3vh;
    border-top: 0.5px solid grey;
    padding-top: 2vh;
  }

  .emo {
    font-size: 20vh;
  }

  .div-btns {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    > span {
      font-size: 2vh;
    }

    > button {
      cursor: pointer;
      padding: 5px;
      border-radius: 10px;
      border: none;
      font-size: var(--fontM);
      flex: 1 0 100px;
      :hover {
        background-color: grey;
        color: white;
      }
      :active {
        background-color: silver;
      }
    }
  }
`

const PATHS = {
  allWork: '/work-and-joy',
  // allWorkDetails: '/work-and-joy/[slug]',
  about: '/about',
  allJournals: '/journals',
  // allJournalDetails: '/journals/[slug]',
} as const

const ContentIsLi: React.FC = () => {
  const router = useRouter()
  const [building, setBuilding] = useState(false)

  const rebuild = useCallback(
    (paths: IParamsRevalidate['paths']) => async () => {
      try {
        setBuilding(true)
        await rebuildPage({ paths })
      } finally {
        setBuilding(false)
      }
    },
    [],
  )

  return (
    <StyledContainer>
      <h2 className='emo'>🌈</h2>
      <h1
        onClick={() => {
          oli()
          router.push('/journals')
        }}
      >
        DeActivate God Mode
      </h1>
      <br />
      <h3>Revalidate routes</h3>
      <div className='div-btns'>
        {building ? (
          <span>rebuilding...</span>
        ) : (
          <>
            <button onClick={rebuild([PATHS.allWork])}>All Work</button>
            <button onClick={rebuild([PATHS.about])}>About</button>
            <button onClick={rebuild([PATHS.allJournals])}>All Journals</button>
            <button onClick={rebuild(Object.values(PATHS))}>ALL</button>
          </>
        )}
      </div>
    </StyledContainer>
  )
}

const ContentIsNotLi: React.FC = () => {
  const [pass, setPass] = useState('')
  const router = useRouter()

  return (
    <StyledContainer>
      <h2 className='emo'>🦄</h2>
      <Input
        autoFocus
        form='god'
        value={pass}
        onChange={(e) => setPass(e.currentTarget.value)}
        type='password'
        divStyle={{ width: '100%' }}
        style={{ width: '100%', textAlign: 'center' }}
      />
      <h1
        onClick={async () => {
          const data = await snatch<TSLi>('/li', {
            method: 'POST',
            body: JSON.stringify(pass),
          })
          if (data) {
            localStorage?.setItem(Object.keys(data)[0], Object.values(data)[0])
            router.back()
          }
        }}
      >
        Activate God Mode
      </h1>
    </StyledContainer>
  )
}
