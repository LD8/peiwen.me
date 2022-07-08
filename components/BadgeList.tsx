import { CSSProperties, memo } from 'react'
import styled from 'styled-components'
import { StyledFlatButton } from './StyledDiv'

const BadgeList: React.FC<{
  badgeList?: string[]
  style?: CSSProperties
  setName?: (name: string) => void
}> = ({ badgeList, style, setName }) => {
  return (
    <SBadgeUl style={style}>
      {!badgeList?.length
        ? null
        : badgeList.map((name) => (
            <li key={name} style={{ display: 'inline' }}>
              <StyledFlatButton
                clickable={!!setName}
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
