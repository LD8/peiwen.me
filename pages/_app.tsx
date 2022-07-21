import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ga from '../lib/ga'
import useScrollingDown from '../lib/hooks/useScrollingDown'
import '../styles/globals.css'

const noLayoutPagePaths = ['/cv', '/cv-zh', '/experimental-photography']

function MyApp({ Component, pageProps, router: { pathname } }: AppProps) {
  // const scrollingDown = useScrollingDown()
  const router = useRouter()

  useEffect(() => {
    /**
     * Log pageviews onMount in production
     * @see ref: [router events](https://nextjs.org/docs/api-reference/next/router#routerevents)
     */
    const handleRouteChange = (url: string) => ga.pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  if (noLayoutPagePaths.filter((path) => pathname.includes(path)).length)
    return <Component {...pageProps} />

  // const isLanding = pathname === '/'
  // const showFixedNav = !isLanding && !scrollingDown

  return (
    <BodyContent>
      <Nav />
      {/* <AnimatePresence>
        {showFixedNav && (
          <motion.div
            className='container-motion-div-for-nav-fixed'
            key={`${pathname}1`}
            initial={{ y: -75, boxShadow: '0 2px 20px 2px transparent' }}
            animate={{ y: 0, boxShadow: '0 2px 20px 2px grey' }}
            exit={{ y: -75, boxShadow: '0 2px 20px 2px transparent' }}
            transition={{ type: 'tween' }}
          >
            <Nav fixed />
          </motion.div>
        )}
      </AnimatePresence> */}

      <AnimatePresence
        // initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
        exitBeforeEnter
      >
        <motion.main
          className='container-motion-main'
          key={pathname}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', duration: 0.35 }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* when in production */}
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <>
          <Script
            id='script-gtag'
            strategy='lazyOnload'
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id='script-dataLayer' strategy='lazyOnload'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
          </Script>
        </>
      )}
    </BodyContent>
  )
}

export default MyApp

const BodyContent = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 0;
  min-height: 100vh;
  background-image: var(--bgi-light-gradient);
  display: flex;
  flex-flow: column;

  .container-motion-div-for-nav-fixed {
    position: fixed;
    top: 0;
    z-index: 3;
    width: 100%;
    background-color: rgb(230, 229, 227);
    box-shadow: 0 2px 20px 2px grey;
  }

  .container-motion-main {
    position: relative;
    z-index: 0;
    width: 100%;
    max-width: 1600px;
    padding: 0 12px;
    margin: 3vh auto;
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: center;

    > .full-flex {
      flex: 1;
      display: flex;
      flex-flow: column;
      margin: 0 auto;
      width: 100%;
    }
  }
`
