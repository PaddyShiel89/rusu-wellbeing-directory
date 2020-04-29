import { css } from "styled-components"
import breakpoint from "../variables/breakpoints"

const min = Object.keys(breakpoint.bp).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoint.bp[label]}) {
        ${css(...args)}
      }
    `
    return accumulator
  },
  {}
)

export default {
  formBreakpoint: min.lg,
  min: min,
  navigationBreakpoint: min.lg,
}