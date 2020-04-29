import buttonStyles from "../variables/buttons"
import colorStyles from "../variables/colors"
import fontStyles from "../variables/fonts"

const base = `display: inline-block;
font-family: ${buttonStyles.base.fontFamily};
font-weight: ${buttonStyles.base.fontWeight};
color: ${buttonStyles.base.color};
text-align: center;
vertical-align: middle;
user-select: none;
background-color: transparent;
border: ${buttonStyles.base.borderWidth} solid transparent;
padding: ${buttonStyles.base.paddingY} ${buttonStyles.base.paddingX};
transition: ${buttonStyles.base.transition};
border-radius: ${buttonStyles.base.borderRadius};
overflow: hidden;

&:hover,
&:focus {
  text-decoration: none;
  color: ${buttonStyles.base.color};
  background-color: transparent;
}`

const primary = props => `
color: ${props.theme.isDark ? colorStyles.black : colorStyles.white};
background-color: ${
  props.theme.isDark ? fontStyles.link.darkThemeColor : fontStyles.link.color
};
&:hover, &:focus {
  color: ${props.theme.isDark ? colorStyles.black : colorStyles.white};
  background-color: ${
    props.theme.isDark ? fontStyles.link.hover.darkThemeColor : fontStyles.link.hover.color
  };
}
`

const secondary = props => `
color: ${props.theme.isDark ? colorStyles.white : colorStyles.black};
background-color: ${
  props.theme.isDark ? colorStyles.gray[700] : colorStyles.gray[300]
};
&:hover, &:focus {
  color: ${props.theme.isDark ? colorStyles.white : colorStyles.black};
  background-color: ${
    props.theme.isDark ? colorStyles.gray[600] : colorStyles.gray[500]
  };
}
`

export default {
  base: base,
  primary: primary,
  secondary: secondary,
}
