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
          Projects built with <em>JavaScript</em> libraries and <em>Python </em>
          frameworks from 2015 to date
        </h3>
        <h4>↓ select / deselect to filter through categories ↓</h4>
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
  margin-bottom: 2vh;
  text-align: center;
  > h3 {
    font-weight: 500;
    margin-bottom: 15px;
  }
  > h4 {
    font-weight: 400;
    color: var(--color-secondary);
    font-size: var(--fontS);
  }
`
const StyledSectWork = styled(motion.section)`
  margin-top: 20px;
  flex: 1;
`
