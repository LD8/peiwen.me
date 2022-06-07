import { CSSProperties } from "react"
import styled from "styled-components"
import { StyledFlatButton } from "./StyledDiv"

const BadgeList: React.FC<{
  badgeList?: string[]
  style?: CSSProperties
}> = ({ badgeList, style }) => {
  return (
    <SBadgeUl style={style}>
      {!badgeList?.length
        ? null
        : badgeList.map((name) => (
            <li key={name} style={{ display: 'inline' }}>
              <StyledFlatButton>{name}</StyledFlatButton>
            </li>
          ))}
    </SBadgeUl>
  )
}
export default BadgeList
const SBadgeUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5px;
  > li {
    min-width: 100px;
  }
`
