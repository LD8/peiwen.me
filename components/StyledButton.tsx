import styled, { css } from 'styled-components'

export const genRGB = (base: number) => `rgb(${base}, ${base}, ${base})`
export const lighten = (base: number, float: number) =>
  genRGB(base * (1 + float))
export const darken = (base: number, float: number) =>
  genRGB(base * (1 - float))

export const base = 200

export const seLight = lighten(base, 0.17)
export const sLight = lighten(base, 0.15)
export const fLight = lighten(base, 0.1)
export const cBg = lighten(base, 0.085)
export const fDark = lighten(base, 0.07)
export const cBase = genRGB(base)
export const sDark = darken(base, 0.4)
export const seDark = darken(base, 0.5)

/**
 * CSS of ** Large ** Box-shadow ** 凸
 */
export const cssBSLarge = css`
  box-shadow:
/* tl shadow enhance */ -3px -3px 10px 5px ${seLight},
    /* tl shadow */ -10px -10px 40px 5px ${sLight},
    /* tl liner */ inset 1px 1px 1px 0 ${seLight},
    /* tl face */ inset 10px 10px 20px 0px ${fDark},
    /* void br liner */ inset -1px -1px 1px 0 ${cBase},
    /* br face */ inset -10px -10px 20px 0px ${fLight},
    /* br shadow enhance */ 3px 3px 10px 5px ${seDark},
    /* br shadow */ 10px 10px 40px 5px ${sDark};
`

/**
 * CSS of ** Small ** Box-shadow ** 凸
 */
export const cssBSSmall = css`
  box-shadow:
 /* tl shadow enhance */ -2px -2px 5px 2px ${seLight},
    /* tl shadow */ -5px -5px 15px 5px ${sLight},
    /* tl liner */ inset 1px 1px 1px 0 ${seLight},
    /* tl face */ inset 5px 5px 10px 0px ${fDark},
    /* void br liner */ inset -1px -1px 1px 0 ${cBase},
    /* br face */ inset -5px -5px 10px 0px ${fLight},
    /* br shadow enhance */ 2px 2px 5px 2px ${seDark},
    /* br shadow */ 5px 5px 15px 2px ${sDark};
`

/**
 * CSS of ** Hover state ** 凹
 */
export const cssHovered = css`
  color: var(--color-dark);
  background-color: ${fLight};
  box-shadow:
/* void tl shadow enhance */ 0 0 0 0 ${cBase},
    /* void tl shadow */ 0 0 0 0 ${cBase},
    /* tl liner */ inset 1px 1px 0 0 ${darken(base, 0.1)},
    /* void tl face */ inset 0 0 0 0 ${cBase},
    /* br liner */ inset -1px -1px 0 0 ${lighten(base, 1)},
    /* void br face */ inset 0 0 0 0 ${cBase},
    /* void br shadow enhance */ 0 0 0 0 ${cBase},
    /* void br shadow */ 0 0 0 0 ${cBase};
`

/**
 * CSS of ** Active/Dented state ** 平凹
 */
export const cssActive = css`
  transition: none;
  color: var(--color-light);
  background-color: ${seLight};
  box-shadow:
/* void tl shadow enhance */ 0 0 0 0 ${cBase},
    /* void tl shadow */ 0 0 0 0 ${cBase},
    /* tl liner */ inset 1px 1px 0 0 ${cBase},
    /* void tl face */ inset 0 0 0 0 ${cBase},
    /* void br liner */ inset -1px -1px 0 0 ${cBase},
    /* void br face */ inset 0 0 0 0 ${cBase},
    /* void br shadow enhance */ 0 0 0 0 ${cBase},
    /* void br shadow */ 0 0 0 0 ${cBase};
`

const StyledButton = styled.button<{ isActive?: boolean; large?: boolean }>`
  cursor: pointer;
  display: block;
  width: 100px;
  height: 28px;
  font-family: Montserrat;
  border: none;
  /* border-radius: 60px; */
  border-radius: 0 60px;
  transition: all 0.2s ease-in-out;
  color: var(--color-secondary);
  background-color: ${cBg};
  font-size: var(--fontS);

  /* box-shadow */
  ${({ large = false }) => (large ? cssBSLarge : cssBSSmall)}

  ${({ isActive = false }) => isActive && cssHovered}

  &:hover {
    ${cssHovered}
  }
  &:active {
    ${cssActive}
  }
`
export default StyledButton
