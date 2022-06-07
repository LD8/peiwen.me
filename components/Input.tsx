import React, { memo } from 'react'
import styled from 'styled-components'

/**
 * interface for props of Input component
 */
export interface IPInput
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Partial<ISPInputDiv> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  divStyle?: React.CSSProperties
}

const Input: React.FC<IPInput> = ({
  onChange,
  label,
  value,
  type,
  divStyle,
  reverse = false,
  style,
  ...props
}) => {
  // console.log('rerendered ', props.name)
  const isRadio = type && ['radio', 'checkbox'].includes(type)
  const cursorStyle = { cursor: isRadio ? 'pointer' : undefined }
  return (
    <StyledInputDiv style={divStyle} reverse={reverse || isRadio}>
      {label && (
        <label style={cursorStyle} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        style={{ ...cursorStyle, ...style }}
        {...props}
      />
    </StyledInputDiv>
  )
}

export default memo(Input)

type ISPInputDiv = { reverse?: boolean }
const StyledInputDiv = styled.div<ISPInputDiv>`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse = false }) => reverse && 'row-reverse'};

  > label {
    padding-right: 10px;
  }
  > input {
    font-size: var(--fontM);
    font-family: 'Montserrat';
    transition: background-color 350ms linear;
    background-color: transparent;
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
    border: none;
    border-bottom: 1px solid #c7c7c7;

    :focus {
      background-color: var(--bgc-code);
    }
  }
`
