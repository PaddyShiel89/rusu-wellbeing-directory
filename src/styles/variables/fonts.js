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

const headings = {
  h1: {
    size: multiplyRem(size.base, 2.5),
    transform: `uppercase`,
    weight: 900,
  },
  h2: {
    size: multiplyRem(size.base, 2),
    transform: `uppercase`,
    weight: weight.bold,
  },
  h3: {
    size: multiplyRem(size.base, 1.75),
    transform: `none`,
    weight: weight.bold,
  },
  h4: {
    size: multiplyRem(size.base, 1.5),
    transform: `none`,
    weight: weight.normal,
  },
  h5: {
    size: multiplyRem(size.base, 1.25),
    transform: `none`,
    weight: weight.normal,
  },
  h6: {
    size: size.base,
    transform: `none`,
    weight: weight.normal,
  },
  lineHeight: `1.2`,
  marginBottom: divideRem(spacingStyles.spacer, 2),
}

const link = {
  color: colorStyles.blue[500],
  decoration: `none`,
  darkThemeColor: colorStyles.blue[400],
  hover: {
    color: colorStyles.blue[700],
    decoration: `underline`,
    darkThemeColor: colorStyles.blue[200]
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
