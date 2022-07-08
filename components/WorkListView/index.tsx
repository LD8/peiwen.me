import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { TResGetWorks } from '../../lib/getWorkData'
import BadgeList from '../BadgeList'
import WorkList from './WorkList'

const WorkListView: React.FC<TResGetWorks> = ({ workList, badgeList }) => {
  const [badge, setBadge] = useState('')
  const [filteredWorkList, setFilteredWorkList] = useState(workList)
  useEffect(() => {
    setFilteredWorkList(() =>
      badge
        ? workList.filter((workItem) => workItem.badges.includes(badge))
        : workList,
    )
  }, [badge])

  const setName = useCallback(
    (name: string) => setBadge((prevName) => (prevName === name ? '' : name)),
    [],
  )
  return (
    <>
      <StyledSectBrief>
        <h3>
          Projects built with <em>JavaScript</em> and <em>Python</em>{' '}
          frameworks, with UX optimization
        </h3>
        <BadgeList badgeList={badgeList} setName={setName} />
      </StyledSectBrief>

      <StyledSectWork>
        <WorkList workList={filteredWorkList} />
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
