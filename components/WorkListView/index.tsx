import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { TResGetWorks } from '../../lib/getWorkData'
import BadgeList from '../BadgeList'
import WorkList from './WorkList'

const WorkListView: React.FC<TResGetWorks> = ({ workList, badgeList }) => {
  const [badge, setBadge] = useState('')
  const [filteredWorkList, setFilteredWorkList] = useState(workList)
  const setName = useCallback(
    (name: string) => setBadge((prevName) => (prevName === name ? '' : name)),
    [],
  )

  useEffect(() => {
    setFilteredWorkList(() =>
      badge
        ? workList.filter((workItem) => workItem.badges.includes(badge))
        : workList,
    )
  }, [badge])
  return (
    <>
      <StyledSectBrief>
        <h3>
          Projects built with <em>JavaScript</em> and <em>Python</em>{' '}
          frameworks, with UX optimization
        </h3>
        <BadgeList badgeList={badgeList} setName={setName} name={badge} />
      </StyledSectBrief>

      <AnimatePresence initial={false} exitBeforeEnter>
        <StyledSectWork
          key={badge}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.1 }}
        >
          <WorkList workList={filteredWorkList} />
        </StyledSectWork>
      </AnimatePresence>
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
const StyledSectWork = styled(motion.section)`
  margin-top: 20px;
  flex: 1;
`
