import { memo } from 'react'
import styled from 'styled-components'
import { debounce } from '../lib/utils'

/**
 * interface for props of Textarea component
 */
export interface IPTextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<IPTextarea> = ({ onChange, value, ...props }) => {
  return <StyledTextarea value={value} onChange={onChange} {...props} />
}

export default memo(Textarea)

const StyledTextarea = styled.textarea`
  font-size: var(--fontM);
  font-family: 'Montserrat';
  background-color: transparent;
  padding: 10px;
  width: 100%;
  margin: 5px;
  border-radius: 5px;
  border: none;
  border-bottom: 1px solid #c7c7c7;
  transition: background-color 350ms linear;
  resize: vertical;

  :focus {
    background-color: var(--bgc-code);
  }
`
// 1
// // ? (bounceChange ? onChange : debounce(onChange)) : undefined
