import { motion } from 'framer-motion'
import Head from 'next/head'
import { GiMonsteraLeaf } from 'react-icons/gi'
import styled from 'styled-components'
import { useAnyInArray, useRandomNumber4SSR } from '../lib/hooks'

const LEAVES = [
  () => <GiMonsteraLeaf />,
  () => <span>🍂</span>,
  () => <span>🍃</span>,
  () => <span>🌿</span>,
] as const

const varSpan = {
  show: {
    opacity: [0, 0.7, 0.2],
    y: [-30, -30, 0],
    x: [-60, 60, 0],
    rotate: [-70, -285, -45],
    scale: [1, 1.2, 1],
    transition: { duration: 2 },
  },
}

const PageNotFound: React.FC = () => {
  const Leaf = useAnyInArray(LEAVES)

  return (
    <S404 id='S404'>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <motion.span id='leaf' animate='show' variants={varSpan}>
        {Leaf()}
      </motion.span>
      <h3>Oops! 404 page not found</h3>
      <p>Any other button will do</p>
    </S404>
  )
}

export default PageNotFound

const S404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #leaf {
    position: absolute;
    font-size: 70px;
    z-index: 3;
    top: 15vh;
  }
`
