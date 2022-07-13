import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import StyledButton, { cBg, cssActive, cssBSSmall, cssHovered } from './StyledButton'

type IPPagination = {
  pageCount: number
  curPage: number
  setCurPage: (num: number) => void
  hideFromPage?: number
  lastHowManyPagesAreButtons?: number
}
const Pagination: React.FC<IPPagination> = ({
  pageCount,
  curPage,
  setCurPage,
  hideFromPage = 6,
  lastHowManyPagesAreButtons = 2,
}) => {
  let pagination = Array(pageCount).fill(null)

  /**
   * if pageCount is 11, hideRange is [6, 9], therefore, page 6-9 would be hidden
   * e.g. 1 2 3 4 5 ____6~9____ 10 11
   */
  const hideRange = [hideFromPage, pageCount - lastHowManyPagesAreButtons]
  if (hideRange[1] > hideRange[0] + 2) {
    pagination = pagination.map((_, i) =>
      i < hideRange[0] - 1 || i > hideRange[1] - 1 ? (
        <Link
          key={i}
          href={{ pathname: '/journals', query: { page: i + 1 } }}
          passHref
        >
          <StyledPageLink
            isActive={curPage === i + 1}
            onClick={() => setCurPage(i + 1)}
          >
            {i + 1}
          </StyledPageLink>
        </Link>
      ) : null,
    )
    const curInHideRange = curPage >= hideRange[0] && curPage <= hideRange[1]
    const input = (
      <StyledInputDiv
        key={hideRange[0]}
        isActive={curInHideRange}
        style={{
          backgroundColor: curInHideRange ? 'var(--color-lighter)' : undefined,
        }}
      >
        <Input
          placeholder={`${hideRange[0]}~${hideRange[1]}`}
          onChange={(e) => {
            const v = Number(e.target.value)
            if (!isNaN(v) && v >= 1 && v <= pageCount) return setCurPage(v)
            setCurPage(1)
          }}
        />
      </StyledInputDiv>
    )
    pagination.splice(hideRange[0] - 1, 0, input)
    return <>{pagination}</>
  }

  pagination = pagination.map((_, i) => (
    <Link
      key={i}
      href={{ pathname: '/journals', query: { page: i + 1 } }}
      passHref
    >
      <StyledPageLink
        isActive={curPage === i + 1}
        onClick={() => setCurPage(i + 1)}
      >
        {i + 1}
      </StyledPageLink>
    </Link>
  ))
  return <>{pagination}</>
}

export default Pagination

const StyledPageLink = styled.a<{ isActive: boolean }>`
  display: block;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  color: var(--color-secondary);
  background-color: ${cBg};
  transition: all 0.2s ease-in-out;
  font-family: Montserrat;

  ${cssBSSmall};
  :hover {
    text-decoration: none;
    ${cssHovered}
  }
  :active {
    ${cssActive}
  }
  ${({ isActive }) => isActive && cssHovered};

  width: 35px;
  height: 35px;
`

const StyledPageJumper = styled(StyledButton)`
  width: 35px;
  height: 35px;
  font-size: var(--fontS);
  margin: 0;
  text-align: center;
  border-radius: 10px;
  border-radius: 30px;
  /* border: 1px solid var(--color-white); */
`

const StyledInputDiv = styled(StyledButton)`
  width: 80px;
  height: 35px;
  margin: 0;
  border-radius: 20px;

  > div {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    input {
      color: var(--color-secondary);
      border: none;
      /* padding-left: 20px; */
      border-radius: 20px;
      text-align: center;
      width: 100%;
      border-radius: inherit;
    }
  }
`
