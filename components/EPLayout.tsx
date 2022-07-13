import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { RiWechat2Line } from 'react-icons/ri'
import styled, { css } from 'styled-components'
import ICONS from '../lib/icons'
import { FCwc } from '../types'
import ExternalLink from './ExternalLink'

const EPLayout: FCwc = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <StyledExpPhoLayout>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </StyledExpPhoLayout>
  )
}
export default EPLayout

const StyledExpPhoLayout = styled.div`
  min-height: 100vh;
  background-color: #131313;
`

const epNavLinks = [
  { name: 'Home', pathname: '/experimental-photography' },
  { name: 'Gallery', pathname: '/experimental-photography/gallery' },
  { name: 'About', pathname: '/experimental-photography/about' },
] as const

const Nav: React.FC = () => {
  const { pathname: curPath } = useRouter()
  return (
    <StyledNav>
      <div className='title'>
        <Link href='/experimental-photography'>Experimental Photography</Link>
      </div>
      <div className='links'>
        {epNavLinks.map(({ name, pathname }) => (
          <span
            key={name}
            style={{
              color: curPath.includes(name.toLowerCase()) ? 'white' : 'grey',
            }}
          >
            <Link href={pathname}>{name}</Link>
          </span>
        ))}
      </div>
    </StyledNav>
  )
}
const cssAnchor = css`
  a {
    color: unset;
    :hover {
      color: white;
      text-decoration: none;
    }
  }
`
const StyledNav = styled.nav`
  z-index: 5;
  box-shadow: 0 0 20px 0px #131313;
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: silver;
  background-color: #202020;

  .title {
  }
  .links {
    display: flex;
    gap: 20px;
  }

  ${cssAnchor}
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className='back-to-peiwen'>
        <ExternalLink href='/'>
          <ICONS.back />
          &nbsp;&nbsp;&nbsp;Back to Peiwen.me
        </ExternalLink>
      </div>
      <div className='contact'>
        <div className='email'>
          <MdAlternateEmail />
          <ExternalLink href='mailto:don_lee@me.com'>e-mail</ExternalLink>
        </div>
        <div className='wechat'>
          <RiWechat2Line />
          <span>don_ald</span>
        </div>
      </div>
    </StyledFooter>
  )
}
const StyledFooter = styled.footer`
  position: sticky;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  background-color: #1b1b1b;

  .back-to-peiwen {
    font-size: 14px;
    a {
      display: flex;
      align-items: center;
    }
  }

  .contact {
    margin-left: 40px;
    color: silver;
    display: flex;
    gap: 40px;
    > div {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  ${cssAnchor}
  a {
    color: silver;
  }
`
