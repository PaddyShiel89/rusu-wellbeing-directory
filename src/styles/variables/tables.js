import { divideRem } from "../../utils/maths"
import fontStyles from "./fonts"
import spacingStyles from "./spacing"

const caption = {
  color: fontStyles.color.muted,
  darkThemeColor: fontStyles.color.darkThemeMuted,
}

const cell = {
  padding: divideRem(spacingStyles.spacer, 2),
}

export default {
  caption: caption,
  cell: cell,
}