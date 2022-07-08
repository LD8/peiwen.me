/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence, motion } from 'framer-motion'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { AiOutlineExperiment } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import styled, { css } from 'styled-components'
import HeadInfo from '../../components/HeadInfo'
import StyledDiv from '../../components/StyledDiv'
import WorkExpView from '../../components/WorkExpView'
import WorkListView from '../../components/WorkListView'
import useResizeObserver from '../../lib/hooks/useResizeObserver'
import { getAllWorks, TResGetWorks } from '../../lib/getWorkData'
import useWorkContextModel from '../../lib/models/useWorkContextModel'

export const getStaticProps: GetStaticProps<TResGetWorks> = () => {
  return { props: getAllWorks() }
}

const WorkAndJoy: NextPage<TResGetWorks> = (props) => {
  const { isExpView, setIsExpView } = useWorkContextModel((m) => [m.isExpView])
  const [tooNarrow, setTooNarrow] = useState(false)
  useEffect(() => (tooNarrow ? setIsExpView(false) : undefined), [tooNarrow])
  const refContainer = useResizeObserver(({ contentRect: { width } }) =>
    setTooNarrow(width < 912),
  )
  return (
    <StyledContainer ref={refContainer}>
      <HeadInfo title="Peiwen's work and joy" />
      {!tooNarrow && (
        <SwitchButton
          as='button'
          size='S'
          onClick={() => queueMicrotask(() => setIsExpView((prev) => !prev))}
        >
          {isExpView ? <BiCategory /> : <AiOutlineExperiment />}
          <span>{isExpView ? 'List.View' : 'Experimental.View'}</span>
        </SwitchButton>
      )}
      <AnimatePresence
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
        exitBeforeEnter
      >
        <motion.div
          className='motion-div'
          key={JSON.stringify(isExpView)}
          initial={{ opacity: 0, x: isExpView ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isExpView ? -100 : 100 }}
          transition={{ type: 'spring', duration: 0.35 }}
        >
          {isExpView ? <WorkExpView {...props} /> : <WorkListView {...props} />}
        </motion.div>
      </AnimatePresence>
    </StyledContainer>
  )
}

export default WorkAndJoy

const cssShared = css`
  flex: 1;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`
const StyledContainer = styled.div`
  /* max-width: 1070px; */
  ${cssShared}
  > .motion-div {
    ${cssShared}
  }
`

const SwitchButton = styled(StyledDiv)`
  display: block;
  margin: -3vh auto 3vh auto;
  height: 22px;
  border-radius: 20px;
  width: 220px;
  font-size: var(--fontS);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
