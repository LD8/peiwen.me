import styled from 'styled-components'
import { FCwc } from '../types'

/**
 * interface for props of Fieldset component
 */
export interface IPFieldset
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    Partial<ISPFieldset> {
  legend?: string
}

const Fieldset: FCwc<IPFieldset> = ({
  row = false,
  gap = '20px',
  legend,
  children,
  ...props
}) => {
  return (
    <StyledFieldset row={row} gap={gap} {...props}>
      {legend && (
        <legend>
          <span>{legend}</span>
        </legend>
      )}
      {children}
    </StyledFieldset>
  )
}

export default Fieldset

type ISPFieldset = { row?: boolean; gap?: React.CSSProperties['gap'] }
const StyledFieldset = styled.fieldset<ISPFieldset>`
  border-radius: 16px;
  border: 1px solid var(--color-white);
  padding: 18px;
  display: flex;
  width: 100%;
  gap: ${({ gap }) => gap};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  flex-wrap: wrap;

  > legend {
    padding: 2px 50px;
    /* width: 250px; */
    text-align: right;
    margin-left: 0px;
    border-radius: 10px;
    font-weight: 500;
    border: 1px solid var(--color-white);
    background-color: #d3d2ca;
    /* background-image: linear-gradient(
      0,
      rgb(235, 235, 235),
      rgb(206, 203, 198)
    ); */
    /* color: white; */
    font-size: var(--fontS);
    letter-spacing: 0.5px;
    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }
`
