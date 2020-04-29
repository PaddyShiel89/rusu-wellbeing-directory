import fontStyles from "./fonts"
import spacingStyles from "./spacing"
import { divideRem } from "../../utils/maths"

const base = {
  borderRadius: `7.8rem`,
  borderWidth: `1px`,
  color: fontStyles.base.color,
  fontFamily: fontStyles.base.family,
  fontWeight: fontStyles.base.weight,
  paddingX: spacingStyles.spacer,
  paddingY: divideRem(spacingStyles.spacer, 3),
  transition: `color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out`,
}

export default {
  base: base,
}