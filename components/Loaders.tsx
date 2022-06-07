import { ImSpinner2 } from 'react-icons/im'
import { AiOutlineLoading } from 'react-icons/ai'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CSSProperties as CSS } from 'react'

const Swinger: React.FC = () => {
  return (
    <Box>
      <motion.div
        initial={{ x: -75 }}
        animate={{ rotate: 360, borderRadius: ['50% 50%', '2% 50%'], x: 75 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />
    </Box>
  )
}
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 20px;
    background: #97b284;
    width: 20px;
    border-radius: 2% 50%;
  }
`

type IPPuffer = { width: CSS['width']; height: CSS['height'] }
const Puffer: React.FC<IPPuffer> = ({ width = '25px', height = '25px' }) => {
  return (
    <Image width={width} height={height} src='/svg/puff.svg' alt='puffing' />
  )
}

const spin = css`
  animation: icon-spin 2s infinite ease-in-out;
  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const Spinner1: React.FC = () => {
  return <StyledSpinner1 />
}
const StyledSpinner1 = styled(ImSpinner2)`
  ${spin}
`
const Spinner2: React.FC = () => {
  return <StyledSpinner2 />
}
const StyledSpinner2 = styled(AiOutlineLoading)`
  ${spin}
`

const Loaders = { Swinger, Puffer, Spinner1, Spinner2 }
export default Loaders
