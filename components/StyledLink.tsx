import styled from 'styled-components'
import { cBg, cssHovered, cssActive, cssBSSmall } from './StyledButton'

const StyledLink = styled.a<{ isActive: boolean }>`
  width: 35px;
  height: 35px;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  color: var(--color-secondary);
  background-color: ${cBg};
  transition: all 0.2s ease-in-out;
  font-family: Montserrat;
  :hover {
    text-decoration: none;
    ${cssHovered}
  }
  :active {
    ${cssActive}
  }
  ${cssBSSmall};
  ${({ isActive }) => isActive && cssHovered};
`

export default StyledLink
