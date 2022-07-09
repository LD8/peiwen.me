import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import ExternalLink from '../../../components/ExternalLink'
import HeadInfo from '../../../components/HeadInfo'
import {
  getEPSeries,
  IEPSingle,
  TResGetEPSeries,
} from '../../../lib/getExpPhotoData'
import { FCwc } from '../../../types'
import { MdAlternateEmail } from 'react-icons/md'
import { RiWechat2Line } from 'react-icons/ri'
import ICONS from '../../../lib/icons'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const getStaticProps: GetStaticProps<TResGetEPSeries> = () => ({
  props: getEPSeries(),
})
const EPGallery: NextPage<TResGetEPSeries> = ({ epSeries }) => {
  return (
    <EPLayout>
      <HeadInfo title='Gallery - Experimental Photography' />
      <StyledMain>
        {epSeries.map((series) => (
          <SingleSeries key={series.order} {...series} />
        ))}
      </StyledMain>
    </EPLayout>
  )
}
export default EPGallery

const StyledMain = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const SingleSeries: React.FC<IEPSingle> = ({
  seriesName,
  seriesSlug,
  coverImgSrc,
}) => {
  const router = useRouter()
  const path = `/experimental-photography/gallery/${seriesSlug}`
  return (
    <StyledSingleSeries
      onClick={() => router.push(path)}
      coverImgSrc={coverImgSrc}
    >
      <div className='series-cover' />
      <h2 className='series-title'>{seriesName}</h2>
    </StyledSingleSeries>
  )
}
const StyledSingleSeries = styled.div<{ coverImgSrc: string }>`
  cursor: pointer;
  flex: 1 50%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .series-cover {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ coverImgSrc }) => `url(${coverImgSrc})`};
    background-size: 110%;
    background-position: center;
    transition: all 500ms ease-in-out;
  }
  .series-title {
    position: absolute;
    z-index: 3;
    color: white;
    font-size: 36px;
    text-shadow: 0px 3px 8px black;
    letter-spacing: 6px;
    font-family: 'Poiret One', cursive;
    transition: all 1200ms ease-in-out;
  }

  :hover {
    .series-cover {
      background-size: 150%;
    }
    .series-title {
      transform: scale(1.8);
      opacity: 0.2;
      letter-spacing: 8px;
    }
  }
  @media screen and (max-width: 600px) {
    flex: 1 100%;
    height: 300px;
  }
`

export const EPLayout: FCwc = ({ children }) => {
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
