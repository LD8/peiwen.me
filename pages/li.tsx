import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import HeadInfo from '../components/HeadInfo'
import Input from '../components/Input'
import { oli, useIsLi } from '../lib/hooks/useGuard'
import snatch from '../lib/snatch'
import { TSLi } from './api/li'

/**
 * LogIn for Peiwen Li PERSONALLY
 */
const Li: NextPage = () => {
  const [pass, setPass] = useState('')
  const router = useRouter()
  const isLi = useIsLi()

  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '600px',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <HeadInfo title="Peiwen Li's Personal page" />
      <h2 style={{ fontSize: '20vh' }}>{isLi ? '🌈' : '🦄'}</h2>
      {isLi ? (
        <h1
          onClick={() => {
            oli()
            router.push('/journals')
          }}
          style={{
            fontFamily: 'cursive',
            cursor: 'pointer',
            letterSpacing: '3px',
          }}
        >
          DeActivate God Mode
        </h1>
      ) : (
        <>
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
                localStorage?.setItem(
                  Object.keys(data)[0],
                  Object.values(data)[0],
                )
                router.back()
              }
            }}
            style={{
              fontFamily: 'cursive',
              cursor: 'pointer',
              letterSpacing: '3px',
            }}
          >
            Activate God Mode
          </h1>
        </>
      )}
    </div>
  )
}

export default Li
