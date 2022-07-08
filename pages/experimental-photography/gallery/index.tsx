import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import HeadInfo from '../../../components/HeadInfo'
import { getEPSeries, TResGetEPSeries } from '../../../lib/getExpPhotoData'
import { FCwc } from '../../../types'

export const getStaticProps: GetStaticProps<TResGetEPSeries> = () => ({
  props: getEPSeries(),
})
const EPGallery: NextPage<TResGetEPSeries> = ({ epSeries }) => {
  const router = useRouter()
  return (
    <EPLayout>
      <HeadInfo title={`Gallery - Experimental Photography`} />
      <StyledMain>
        {epSeries.map(({ order, seriesName, seriesSlug, coverImgSrc }) => {
          const path = `/experimental-photography/gallery/${seriesSlug}`
          return (
            <div
              className='div-series'
              key={order}
              onClick={() => router.push(path)}
            >
              <Image
                className='cover'
                src={coverImgSrc}
                alt={`Cover image of ${seriesName}`}
                width='100%'
                height='100%'
              />
              <h2 className='series-title'>{seriesName}</h2>
            </div>
          )
        })}
      </StyledMain>
    </EPLayout>
  )
}
export default EPGallery

const StyledMain = styled.div`
  display: flex;
  flex-flow: row wrap;

  .div-series {
    flex: 1 50%;
    position: relative;

    > .cover {
      width: 100% !important;
      z-index: 0;
    }
    > .series-title {
      position: absolute;
      z-index: 3;
    }
  }
`

export const EPLayout: FCwc = ({ children }) => {
  return (
    <StyledExpPhoLayout>
      <Nav />
      {children}
      <Footer />
    </StyledExpPhoLayout>
  )
}
const StyledExpPhoLayout = styled.div`
  min-height: 100vh;
  background-color: #131313;
`

const epNavLinks = [
  { name: 'Gallery', pathname: '/experimental-photography/gallery' },
  { name: 'About', pathname: '/experimental-photography/about' },
  { name: 'Contact', pathname: '/experimental-photography/contact' },
] as const

const Nav: React.FC = () => {
  const { pathname: curPath } = useRouter()
  return (
    <StyledNav>
      <div className='title'>
        <Link href={'/experimental-photography'}>Experimental Photography</Link>
      </div>
      <div className='links'>
        {epNavLinks.map(({ name, pathname }) => (
          <Link key={name} href={pathname}>
            <span
              style={{
                color: pathname === curPath ? 'white' : undefined,
                cursor: 'pointer',
              }}
            >
              {name}
            </span>
          </Link>
        ))}
      </div>
    </StyledNav>
  )
}
const StyledNav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: grey;
  background-color: #202020;

  .title {
  }
  .links {
    display: flex;
    gap: 20px;
  }
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className='peiwen'>
        <Link href='/'>Back to Peiwen.me</Link>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: sticky;
  top: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  background-color: #1b1b1b;
`
