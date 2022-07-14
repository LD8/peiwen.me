import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import Input from './Input'
import StyledButton from './StyledButton'
import StyledLink from './StyledLink'

type IPPagination = {
  pageCount: number
  curPage: number
  hideFromPage?: number
  lastHowManyPagesAreButtons?: number
}
const genHref = (page: number) => ({ pathname: '/journals', query: { page } })
const Pagination: React.FC<IPPagination> = ({
  pageCount,
  curPage,
  hideFromPage = 6,
  lastHowManyPagesAreButtons = 2,
}) => {
  let pagination = Array(pageCount).fill(null)
  const hideRange = [hideFromPage, pageCount - lastHowManyPagesAreButtons]
  const curInHideRange = curPage >= hideRange[0] && curPage <= hideRange[1]

  const router = useRouter()
  const turnPage = useCallback((page: number) => router.push(genHref(page)), [])
  const [inputV, setInputV] = useState('')

  useEffect(
    () => (curInHideRange ? setInputV(String(curPage)) : setInputV('')),
    [curPage],
  )

  /**
   * if pageCount is 11, hideRange is [6, 9], therefore, page 6-9 would be hidden -
   * e.g. 1 2 3 4 5 « ____6~9____ » 10 11
   */
  if (hideRange[1] > hideRange[0] + 2) {
    pagination = pagination.map((_, i) =>
      i < hideRange[0] - 1 || i > hideRange[1] - 1 ? (
        <Link key={i} href={genHref(i + 1)} passHref>
          <StyledLink isActive={curPage === i + 1}>{i + 1}</StyledLink>
        </Link>
      ) : null,
    )
    const holder = `${hideRange[0]}~${hideRange[1]}`
    const input = (
      <>
        <Link key='back' href={genHref(curPage - 1)} passHref>
          <StyledLink isActive={false}>«</StyledLink>
        </Link>
        <StyledInputDiv key={hideRange[0]} isActive={curInHideRange}>
          <Input
            placeholder={holder}
            value={inputV}
            onFocus={() => setInputV('')}
            onBlur={() =>
              curInHideRange ? setInputV(String(curPage)) : setInputV('')
            }
            onKeyDown={(e) => {
              if (['Enter', 'NumpadEnter'].includes(e.code)) {
                const v = Number((e.target as any).value)
                if (isNaN(v)) {
                  setInputV('')
                  return toast('Must be a number duhhh', { icon: '🫠' })
                }
                if (v >= hideRange[0] && v <= hideRange[1]) {
                  // e.g. ____6~9____
                  // only when input falls into hideRange would its state be changed
                  turnPage(v)
                } else if (v <= pageCount && v > 0) {
                  // e.g. 1 2 3 4 5    10 11
                  setInputV('')
                  turnPage(v)
                } else {
                  setInputV('')
                  toast('Out of range', { icon: '🧐' })
                }
              }
            }}
            onChange={(e) => setInputV(e.target.value)}
          />
        </StyledInputDiv>
        <Link key='forward' href={genHref(curPage + 1)} passHref>
          <StyledLink isActive={false}>»</StyledLink>
        </Link>
      </>
    )
    pagination.splice(hideRange[0] - 1, 0, input)
  } else {
    pagination = pagination.map((_, i) => (
      <Link key={i} href={genHref(i + 1)} passHref>
        <StyledLink isActive={curPage === i + 1}>{i + 1}</StyledLink>
      </Link>
    ))
  }

  return <>{pagination}</>
}

export default Pagination

const StyledInputDiv = styled(StyledButton)`
  width: 80px;
  height: 35px;

  > div {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    input {
      color: var(--color-secondary);
      border: none;
      border-radius: 20px;
      text-align: center;
      width: 100%;
      border-radius: inherit;
    }
  }
`
