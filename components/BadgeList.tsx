import { CSSProperties, memo } from 'react'
import styled from 'styled-components'
import { StyledFlatButton } from './StyledDiv'

const BadgeList: React.FC<{
  badgeList?: string[]
  style?: CSSProperties
  name?: string
  setName?: (name: string) => void
}> = ({ badgeList, style, name: nameSelected, setName }) => {
  return (
    <SBadgeUl style={style}>
      {!badgeList?.length
        ? null
        : badgeList.map((name) => (
            <li key={name} style={{ display: 'inline' }}>
              <StyledFlatButton
                clickable={!!setName}
                clicked={name === nameSelected}
                onClick={() => setName?.(name)}
              >
                {name}
              </StyledFlatButton>
            </li>
          ))}
    </SBadgeUl>
  )
}
export default memo(BadgeList)
const SBadgeUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5px;
  > li {
    min-width: 100px;
  }
`
