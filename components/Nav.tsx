import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import StyledDiv from './StyledDiv'

const navMap = [
  // { name: 'Home', pathname: '/' },
  { name: 'Work', pathname: '/work-and-joy' },
  { name: 'Peiwen', pathname: '/peiwen-me' },
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
      <SNavUl isLanding={isLanding}>
        <AnimatePresence initial={false}>
          {!isLanding && (
            <motion.li
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
              <SNavBtn
                as='button'
                width='90px'
                height='35px'
                margin='20px 20px'
                size='S'
                onClick={() => router.push('/')}
              >
                <span>Home</span>
              </SNavBtn>
            </motion.li>
          )}
        </AnimatePresence>
        {navMap.map(({ name, pathname }) => {
          const isActive = router.pathname.includes(pathname)
          const isNavPage = router.pathname === pathname
          const isDetailPage = isActive && !isNavPage
          return (
            <li key={name}>
              <SNavBtn
                as='button'
                width={isLanding ? undefined : '90px'}
                height={isLanding ? undefined : '35px'}
                margin={isLanding ? undefined : '20px 20px'}
                size={isLanding ? undefined : 'S'}
                isLanding={isLanding}
                isActive={isActive}
                onClick={() => router.push(isNavPage ? '/' : pathname)}
              >
                <span>{isDetailPage ? 'back' : name}</span>
              </SNavBtn>
            </li>
          )
        })}
      </SNavUl>
    </motion.nav>
  )
}

export default Nav

const SNavUl = styled.ul<{ isLanding: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;

  @media screen and (max-width: 767px) and (orientation: portrait) {
    flex-direction: ${({ isLanding }) => (isLanding ? 'column' : undefined)};
    > :first-child {
      display: ${({ isLanding }) => (isLanding ? undefined : 'none')};
    }
  }
`

const SNavBtn = styled(StyledDiv)<{ isLanding?: boolean }>`
  @media screen and (max-width: 1200px) {
    width: ${({ width = '300px', isLanding = false }) =>
      isLanding && `calc(${width} * 0.6)`};
    height: ${({ height = '120px', isLanding = false }) =>
      isLanding && `calc(${height} * 0.6)`};
  }
`
