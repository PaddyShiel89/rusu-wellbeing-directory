import { divideRem, multiplyRem } from "../../utils/maths"
import colorStyles from "./colors"
import spacingStyles from "./spacing"

const color = {
  muted: colorStyles.gray[600],
  darkThemeMuted: colorStyles.gray[500]
}

const family = {
  monospace: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  sansSerif: `proxima-nova, Arial, sans-serif`,
}

const weight = {
  lighter: `lighter`,
  light: 300,
  normal: 400,
  bold: 700,
  bolder: `bolder`,
}

const size = {
  base: `2rem`,
  lg: `2.4rem`,
  sm: `1.6rem`,
}

const base = {
  family: family.sansSerif,
  size: size.base,
  weight: 400,
  lineHeight: 1.5,
  color: colorStyles.gray[900],
  darkThemeColor: colorStyles.gray[100],
}

const h1multiplier = 2.5
const h2multiplier = 2
const h3multiplier = 1.75
const h4multiplier = 1.5
const h5multiplier = 1.25
const h6multiplier = 1

const headings = {
  h1: {
    multiplier: h1multiplier,
    size: multiplyRem(size.base, h1multiplier),
    transform: `uppercase`,
    weight: 900,
  },
  h2: {
    multiplier: h2multiplier,
    size: multiplyRem(size.base, h2multiplier),
    transform: `uppercase`,
    weight: weight.bold,
  },
  h3: {
    multiplier: h3multiplier,
    size: multiplyRem(size.base, h3multiplier),
    transform: `none`,
    weight: weight.bold,
  },
  h4: {
    multiplier: h4multiplier,
    size: multiplyRem(size.base, h4multiplier),
    transform: `none`,
    weight: weight.bold,
  },
  h5: {
    multiplier: h5multiplier,
    size: multiplyRem(size.base, h5multiplier),
    transform: `none`,
    weight: weight.normal,
  },
  h6: {
    multiplier: h6multiplier,
    size: multiplyRem(size.base, h6multiplier),
    transform: `none`,
    weight: weight.normal,
  },
  lineHeight: `1.2`,
  marginBottom: divideRem(spacingStyles.spacer, 2),
}

const link = {
  color: colorStyles.blue[600],
  decoration: `none`,
  darkThemeColor: colorStyles.blue[300],
  hover: {
    color: colorStyles.blue[800],
    decoration: `underline`,
    darkThemeColor: colorStyles.blue[100]
  },
}

const paragraph = {
  marginBottom: spacingStyles.spacer,
}


export default {
  base: base,
  color: color,
  family: family,
  link: link,
  headings: headings,
  paragraph: paragraph,
  size: size,
  weight: weight,
}
