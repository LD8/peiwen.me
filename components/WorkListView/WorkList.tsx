import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { TResGetWorks } from '../../lib/getWorkData'
import WorkListItem from './WorkListItem'

const varContainer = { show: { transition: { staggerChildren: 0.15 } } }

type IPWorkList = { workList: TResGetWorks['workList'] }
const WorkList: React.FC<IPWorkList> = ({ workList }) => {
  return (
    <StyledWorkList variants={varContainer} initial={false} animate='show'>
      {workList.map((w) => (
        <WorkListItem key={w.slug} {...w} />
      ))}
    </StyledWorkList>
  )
}

export default WorkList

const StyledWorkList = styled(motion.ol)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  width: 100%;
  @media screen and (max-width: 1200px) {
    gap: 30px;
  }
  @media screen and (max-width: 868px) {
    gap: 20px;
  }
`
