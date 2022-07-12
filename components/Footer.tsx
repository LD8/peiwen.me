import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { FaDev, FaLinkedin } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { VscGithub } from 'react-icons/vsc'
import styled from 'styled-components'
import useMediaQuery from '../lib/hooks/useMediaQuery'
import ExternalLink from './ExternalLink'

const FOOTER_LINKS = [
  {
    name: 'Dev.to',
    href: 'https://dev.to/ld8',
    Icon: FaDev,
    desc: 'Dev.to profile of Peiwen Li',
  },
  {
    name: 'Github',
    href: 'https://github.com/LD8',
    Icon: VscGithub,
    desc: 'Github of Peiwen Li',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/peiwen-li-52005b87/',
    Icon: FaLinkedin,
    desc: 'LinkedIn profile of Peiwen Li',
  },
  {
    name: 'CV',
    href: '/cv',
    Icon: BsPersonBoundingBox,
    desc: 'CV/Resumé of Peiwen Li',
  },
  {
    name: 'Email',
    href: 'mailto: don_lee@me.com',
    Icon: MdAlternateEmail,
    desc: 'Email address: Mail to Peiwen Li at don_lee@me.com',
  },
] as const

const Footer: React.FC = () => {
  const router = useRouter()
  const isSmallScreen = useMediaQuery('(max-width: 600px)')

  const [clientReady, setClientReady] = useState(false)
  useEffect(() => {
    setClientReady(true)
  }, [])

  return (
    <StyledFooter isLanding={router.pathname === '/'}>
      <div className='icon-links'>
        {FOOTER_LINKS.map(({ name, Icon, href }) => (
          <SAnchor
            key={name}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon />
            {!isSmallScreen && <span className='name'>{name}</span>}
          </SAnchor>
        ))}
      </div>
      <div className='ack'>
        {/* <ExternalLink href='#'>
          <span>Powered by Nextjs and Dev.to API</span>
        </ExternalLink> */}
        <span>Gratitude to my family, the earth, the sun, the universe</span>
      </div>
      <div className='li'>
        <button onClick={() => router.push('/li')} />
      </div>

      {clientReady && (
        <Toaster
          position='bottom-right'
          reverseOrder={false}
          toastOptions={{ duration: 5000 }}
        />
      )}
    </StyledFooter>
  )
}

export default Footer

const SAnchor = styled.a`
  margin: 0 5px;
  padding: 6px;
  :hover {
    transform: scale(1.1);
    color: green;
  }

  display: flex;
  align-items: center;
  gap: 5px;

  span.name {
    font-size: 0.7rem;
  }
`
const StyledFooter = styled.footer<{ isLanding: boolean }>`
  position: sticky;
  top: 100%;
  min-height: 10vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: ${({ isLanding }) =>
    isLanding ? 'var(--color-secondary)' : 'var(--color-dark)'};

  a {
    color: ${({ isLanding }) =>
      isLanding ? 'var(--color-secondary)' : 'var(--color-dark)'};
  }

  > div {
    z-index: 1;
  }
  > div.icon-links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
  }
  > div.ack {
    font-size: 0.7rem;
    margin-top: 10px;
  }

  > div.li {
    position: absolute;
    z-index: 0;
    left: 0;
    bottom: 0;
    > button {
      height: 30px;
      width: 30px;
      background-color: transparent;
      border: none;
    }
  }
`
