import { NextPage } from 'next'
import styled from 'styled-components'
import HeadInfo from '../../components/HeadInfo'
import { EPLayout } from './gallery'

const EPAbout: NextPage = () => {
  return (
    <EPLayout>
      <HeadInfo title='About - Experimental Photography' />
      <StyledMain>About</StyledMain>
    </EPLayout>
  )
}
export default EPAbout

const StyledMain = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 3vh auto 6vh auto;
  color: silver;
`
