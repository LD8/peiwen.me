import React from 'react'
import styled from 'styled-components'
import { TResGetWorks } from '../../lib/getWorkData'
import WorkListItem from './WorkListItem'

type IPWorkList = { workList: TResGetWorks['workList'] }
const WorkList: React.FC<IPWorkList> = ({ workList }) => {
  return (
    <SWorkOl>
      {workList.map((w) => (
        <WorkListItem key={w.slug} {...w} />
      ))}
    </SWorkOl>
  )
}

export default WorkList

const SWorkOl = styled.ol`
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
