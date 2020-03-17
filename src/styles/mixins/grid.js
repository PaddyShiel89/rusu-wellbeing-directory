import breakpoint from "../variables/breakpoints"
import spacing from "../variables/spacing"


const Container = (gutter = spacing.spacer) => `
  width: 100%;
  padding-right: ${gutter};
  padding-left: ${gutter};
  margin-right: auto;
  margin-left: auto;
`

const ContainerMaxWidths = () => {
  let styles = ``
  Object.keys(breakpoint.max).forEach(breakItem => {
    styles += `
      @media (min-width: ${breakpoint.bp[breakItem]}) {
        max-width: ${breakpoint.max[breakItem]}
      }
    `
  })
  return styles
}

const Row = (gutter = spacing.spacer) => `
  display: flex;
  flex-wrap: wrap;
  margin-right: -${gutter};
  margin-left: -${gutter};
`

const ColBase = (gutter = spacing.spacer) => `
  position: relative;
  width: 100%;
  padding-right: ${gutter};
  padding-left: ${gutter};
`

const Col = (size, columns = 12) => `
  flex: 0 0 ${size / columns * 100}%;
  max-width: ${size / columns * 100}%;
`

export default {
  col: Col,
  colBase: ColBase,
  container: Container,
  containerMaxWidths: ContainerMaxWidths,
  row: Row,
}
