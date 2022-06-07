/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { useHoverRef } from '../../lib/hooks'
import { TResGetWorks } from '../../lib/getWorkData'
import useWorkContextModel from '../../lib/models/useWorkContextModel'
import StyledDiv from '../StyledDiv'
import WorkDisplay from './WorkDisplay'

const WorkExpView: React.FC<TResGetWorks> = ({ workList, badgeList }) => {
  return (
    <>
      <WorkCarrousel workList={workList} />
      <StyledSectBrief>
        <h3>
          Projects built with <em>JavaScript</em> and <em>Python</em>{' '}
          frameworks, with UX optimization
        </h3>
      </StyledSectBrief>
    </>
  )
}

export default WorkExpView

const StyledSectBrief = styled.section`
  margin-top: 3vh;
  > h3 {
    text-align: center;
    font-weight: 500;
  }
`

const WorkCarrousel: React.FC<Partial<TResGetWorks>> = ({ workList }) => {
  const [hovering, ref] = useHoverRef()
  const { workIndex, setWorkIndex } = useWorkContextModel((m) => [m.workIndex])
  const [right, setRight] = useState(true)
  const goL = useCallback((arrLen: number) => {
    queueMicrotask(() => setRight(true))
    setTimeout(() =>
      setWorkIndex((prev) => (!prev ? arrLen - 1 : (prev - 1) % arrLen)),
    )
  }, [])
  const goR = useCallback((arrLen: number) => {
    queueMicrotask(() => setRight(false))
    setTimeout(() => setWorkIndex((prev) => (prev + 1) % arrLen))
  }, [])

  if (!workList?.length) return null
  return (
    <StyledWorkSection ref={ref}>
      <StyledDirDiv className='left' hovering={hovering}>
        <StyledDiv as='button' size='S' onClick={() => goL(workList.length)}>
          <span>«</span>
        </StyledDiv>
      </StyledDirDiv>

      <WorkDisplay
        {...workList[workIndex]}
        hovering={hovering}
        index={workIndex}
        right={right}
      />

      <StyledDirDiv className='right' hovering={hovering}>
        <StyledDiv as='button' size='S' onClick={() => goR(workList.length)}>
          <span>»</span>
        </StyledDiv>
      </StyledDirDiv>
    </StyledWorkSection>
  )
}

const StyledWorkSection = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 900ms ease-in-out;
  gap: 50px;
  :hover {
    gap: 30px;
  }
  @media screen and (min-width: 1800px) {
    gap: 80px;
    :hover {
      gap: 50px;
    }
  }
`

const StyledDirDiv = styled.div<{ hovering: boolean }>`
  transition: all 900ms ease-in-out;
  position: relative;
  top: 0;

  > button {
    transition: all 900ms ease-in-out;
    font-size: var(--fontL);
    color: var(--color-tertiary);
    margin: 0;
    height: 200px;
    width: 30px;
    border-radius: 0 20px;
  }

  ${({ hovering }) =>
    hovering &&
    css`
      &.left {
        top: 5vh;
      }
      &.right {
        top: -5vh;
      }
      > button {
        border-radius: 40px 0;
      }
    `}
`
