import { multiplyRem, divideRem } from "../../utils/maths"
import fontStyles from "./fonts"
import spacingStyles from "./spacing"

const inputLineHeight = fontStyles.base.lineHeight
const inputPaddingX = spacingStyles.spacer
const inputPaddingY = spacingStyles.spacer
const inputHeight = `calc(${multiplyRem(
  `1rem`,
  inputLineHeight
)} + ${multiplyRem(inputPaddingY, 2)})`

const group = {
  marginBottom: spacingStyles.spacer,
}

const input = {
  height: inputHeight,
  lineHeight: inputLineHeight,
  paddingX: inputPaddingX,
  paddingY: inputPaddingY,
}

const label = {
  marginBottom: divideRem(spacingStyles.spacer, 2),
}

export default {
  group: group,
  input: input,
  label: label,
}
