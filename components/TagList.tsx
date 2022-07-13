import styled, { css } from 'styled-components'
import { cBase, fLight } from './StyledButton'

const TagList: React.FC<{ tagList: string[]; center?: boolean } & IStyle> = ({
  tagList,
  center = false,
  style,
}) => {
  return tagList.length ? (
    <StyledTagList style={style} center={center}>
      {tagList.map((name) => (
        <li key={name}>
          <span>{name}</span>
        </li>
      ))}
    </StyledTagList>
  ) : null
}

export default TagList

export const cssTagItem = css`
  display: grid;
  justify-content: center;
  align-items: center;
  /* min-width: 80px; */
  padding: 2px 16px;
  font-size: var(--fontS);
  border-radius: 0 20px 0px 20px;
  border: 0.5px solid ${cBase};
  background-color: ${fLight};
`

const StyledTagList = styled.ul<{ center: boolean }>`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${({ center }) => center && 'center'};
  gap: 5px;
  color: var(--color-dark);

  li {
    ${cssTagItem}
  }
`
