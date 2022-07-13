import styled from 'styled-components'
import { cBase, fLight } from './StyledDiv'

const TagList: React.FC<{ tagList: string[] }> = ({ tagList }) => {
  return tagList.length ? (
    <StyledTagList>
      {tagList.map((name) => (
        <li key={name}>
          <span>{name}</span>
        </li>
      ))}
    </StyledTagList>
  ) : null
}

export default TagList

const StyledTagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 5px;
  color: var(--color-dark);

  li {
    display: grid;
    justify-content: center;
    align-items: center;
    /* min-width: 80px; */
    padding: 2px 16px;
    font-size: var(--fontS);
    border-radius: 0 20px 0px 20px;
    border: 0.5px solid ${cBase};
    background-color: ${fLight};
  }
`
