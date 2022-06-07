import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaCanadianMapleLeaf } from 'react-icons/fa'
import {
  GiChestnutLeaf,
  GiGinkgoLeaf,
  GiMonsteraLeaf,
  GiOakLeaf,
} from 'react-icons/gi'
import styled from 'styled-components'
import { useAnyInArray } from '../lib/hooks'
import { getRandomPNDigit } from '../lib/utils'

const LEAVES = [
  FaCanadianMapleLeaf,
  GiChestnutLeaf,
  GiGinkgoLeaf,
  // GiOakLeaf,
  GiMonsteraLeaf,
] as const

export const useAnyLeaf = () => useAnyInArray(LEAVES)

const LeafSwirl: React.FC<IStyle & { swing?: number }> = ({
  style,
  swing = 100,
}) => {
  const Leaf = useAnyInArray(LEAVES)
  const [motionProps, setMotionProps] = useState({})
  useEffect(() => {
    setMotionProps({
      initial: {
        x: getRandomPNDigit(swing),
        y: getRandomPNDigit(swing),
        rotate: getRandomPNDigit(10),
      },
      animate: { x: 0, y: 0, rotate: 0 },
      transition: {
        // duration: 2,
        type: 'inertia',
        velocity: getRandomPNDigit(swing * 1.5),
        delay: 0.1,
      },
    })
  }, [swing])

  return (
    <MotionLeafContainer {...motionProps} style={style}>
      <Leaf />
    </MotionLeafContainer>
  )
}

export default LeafSwirl

const MotionLeafContainer = styled(motion.div)`
  position: absolute;
  z-index: -1;
  top: -10vh;
  font-size: 70vh;
  opacity: 0.03;

  @media screen and (max-width: 600px) and (max-height: 800px) {
    font-size: 50vh;
  }
`
