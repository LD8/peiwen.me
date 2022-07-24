import React from 'react'
import styled, { css } from 'styled-components'
import { FCwc } from '../types'
import { cssActive, cssHovered } from './StyledButton'

type IDetailsProps = {
  summary?: string
  open?: boolean
}
const Details: FCwc<IDetailsProps> = ({
  children,
  summary = 'Details',
  open = false,
}) => {
  return (
    <StyledDetails open={open}>
      <summary>
        <span>{summary}</span>
      </summary>
      <div className='content'>{children}</div>
    </StyledDetails>
  )
}

export default Details

const StyledDetails = styled.details`
  cursor: pointer;
  margin-bottom: 0px;
  border-radius: 5px;
  transition: all 200ms ease-in-out;

  summary {
    transition: all 200ms ease-in-out 350ms;
    font-size: var(--fontM);
    font-weight: 500;
    padding: 5px;
    margin-bottom: 5px;
    > span {
      margin-left: 10px;
    }
    ::marker {
      color: silver;
    }
    :hover {
      color: var(--airy-vivid);
      ::marker {
        color: var(--airy-vivid);
      }
      transition: all 200ms ease-in-out;
    }
  }

  .content {
    padding: 0 0px 0px 0px;
    cursor: default;
    opacity: 0;
    p {
      text-align: justify;
      text-indent: 28px;
      margin-bottom: 5px;
    }
  }

  &[open] {
    /* ↓ this is essential for some reason? */
    transition: all 200ms ease-in-out;

    summary {
      color: var(--airy-vivid);
      ::marker {
        color: var(--airy-vivid);
      }
      :hover {
        color: var(--airy-dark);
      }
    }
    .content {
      opacity: 1;
    }
  }
`
