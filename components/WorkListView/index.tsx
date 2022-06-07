import React from 'react'
import styled from 'styled-components'
import { TResGetWorks } from '../../lib/getWorkData'
import BadgeList from '../BadgeList'
import WorkList from './WorkList'

const WorkListView: React.FC<TResGetWorks> = ({ workList, badgeList }) => {
  return (
    <>
      <StyledSectBrief>
        <h3>
          Projects built with <em>JavaScript</em> and <em>Python</em>{' '}
          frameworks, with UX optimization
        </h3>
        <BadgeList badgeList={badgeList} />
      </StyledSectBrief>

      <StyledSectWork>
        <WorkList workList={workList} />
      </StyledSectWork>
    </>
  )
}

export default WorkListView

const StyledSectBrief = styled.section`
  max-width: 1070px;
  margin-bottom: 3vh;
  > h3 {
    text-align: center;
    margin-bottom: 15px;
    font-weight: 500;
  }
  > p {
    margin: 0;
    font-size: var(--fontS);
    cursor: pointer;
  }
`
const StyledSectWork = styled.section`
  margin-top: 20px;
  flex: 1;
`
