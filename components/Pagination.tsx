import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import StyledDiv from './StyledDiv'

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
        <StyledPageJumper
          as='button'
          key={i}
          isActive={curPage === i + 1}
          className='page-jumper'
          onClick={() => setCurPage(i + 1)}
        >
          {i + 1}
        </StyledPageJumper>
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
    <StyledPageJumper
      as='button'
      key={i}
      isActive={curPage === i + 1}
      className='page-jumper'
      onClick={() => setCurPage(i + 1)}
    >
      {i + 1}
    </StyledPageJumper>
  ))
  return <>{pagination}</>
}

export default Pagination

const StyledPageJumper = styled(StyledDiv)`
  width: 35px;
  height: 35px;
  font-size: var(--fontS);
  margin: 0;
  text-align: center;
  border-radius: 10px;
  border-radius: 30px;
  /* border: 1px solid var(--color-white); */
`

const StyledInputDiv = styled(StyledDiv)`
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
