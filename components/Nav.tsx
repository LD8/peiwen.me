import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { cBg, cssActive, cssBSLarge, cssBSSmall, cssHovered } from './StyledButton'

const navMap = [
  // { name: 'Home', pathname: '/' },
  { name: 'Work', pathname: '/work-and-joy' },
  { name: 'Peiwen', pathname: '/about' },
  { name: 'Journal', pathname: '/journals' },
] as const

const Nav: React.FC<{ fixed?: boolean }> = ({ fixed = false }) => {
  const router = useRouter()
  const isLanding = router.pathname === '/'

  const [y, setY] = useState('0')
  useEffect(() => {
    // NOTE: adjust nav position onResize
    const handleResize = (e?: Event | number) => {
      let y = '0'
      if (isLanding) {
        y = '33vh'
        const width = typeof e === 'number' ? e : (e?.target as any)?.innerWidth
        if (width && width < 768) y = '15vh'
        // if (width && width < 500) y = '10vh'
      }
      setY(y)
    }
    handleResize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isLanding])

  return isLanding && fixed ? null : (
    <motion.nav
      style={{ position: 'relative', zIndex: 2, width: '100%' }}
      animate={{ y }}
      transition={{ duration: 1, delay: isLanding ? 0.03 : 0, type: 'spring' }}
    >
      <SNavOl isLanding={isLanding}>
        <AnimatePresence initial={false}>
          {!isLanding && (
            <motion.li
              className='link-home'
              initial={{ opacity: 0, x: -300, width: 0 }}
              animate={{
                opacity: 1,
                x: 0,
                width: 130,
                transition: { delay: 0.5 },
              }}
              exit={{
                opacity: 0,
                x: -200,
                width: 0,
                transition: { duration: 0.1 },
              }}
            >
              <Link href='/' passHref>
                <SNavLink isLanding={isLanding} isActive={false}>
                  Home
                </SNavLink>
              </Link>
            </motion.li>
          )}
        </AnimatePresence>
        {navMap.map(({ name, pathname }) => {
          const isActive = router.pathname.includes(pathname)
          const isNavPage = router.pathname === pathname
          const isDetailPage = isActive && !isNavPage
          return (
            <li key={name}>
              <Link href={isNavPage ? '/' : pathname} passHref>
                <SNavLink isLanding={isLanding} isActive={isActive}>
                  {isDetailPage ? 'back' : name}
                </SNavLink>
              </Link>
            </li>
          )
        })}
      </SNavOl>
    </motion.nav>
  )
}

export default Nav

const SNavOl = styled.ol<{ isLanding: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  li {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 767px) and (orientation: portrait) {
    flex-direction: ${({ isLanding }) => (isLanding ? 'column' : undefined)};
  }
  @media screen and (max-width: 767px) {
    .link-home {
      display: none;
    }
  }
`

const SNavLink = styled.a<{ isLanding: boolean; isActive: boolean }>`
  display: block;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  color: var(--color-secondary);
  background-color: ${cBg};
  transition: all 0.2s ease-in-out;
  font-family: Montserrat;

  :hover {
    text-decoration: none;
    ${cssHovered}
  }
  :active {
    ${cssActive}
  }

  ${({ isLanding }) =>
    isLanding
      ? css`
          width: 230px;
          height: 80px;
          margin: calc(1.5vmin + 20px);
          ${cssBSLarge}
          @media screen and (max-width: 820px) {
            width: 180px;
            height: 60px;
          }
          @media screen and (orientation: landscape) and (max-width: 896px) {
            width: 150px;
            height: 60px;
          }
        `
      : css`
          width: 90px;
          height: 35px;
          margin: 20px;
          ${cssBSSmall}
        `};

  /* NOTE: ↓ this has to be after this ↑ */
  ${({ isActive }) => isActive && cssHovered}
`
