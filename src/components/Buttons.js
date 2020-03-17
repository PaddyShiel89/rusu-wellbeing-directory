import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { color, font, spacing } from "../styles/styles"
import { divideRem, multiplyRem } from "../utils/maths"

const base = {
  borderRadius: multiplyRem(spacing.spacer, 4),
  borderWidth: `1px`,
  color: font.base.color,
  fontFamily: font.base.family,
  fontWeight: font.base.weight,
  paddingX: spacing.spacer,
  paddingY: divideRem(spacing.spacer, 3),
  transition: `color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out`,
}

const Btn = styled(props => <Link {...props} />)`
  display: inline-block;
  font-family: ${base.fontFamily};
  font-weight: ${base.fontWeight};
  color: ${props => props.primary ? color.white : base.color};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: ${props => props.primary ? font.link.color : `transparent`};
  border: ${base.borderWidth} solid transparent;
  padding: ${base.paddingY} ${base.paddingX};
  transition: ${base.transition};
  border-radius: ${base.borderRadius};
  overflow: hidden;

  &:hover, &:focus {
    text-decoration: none;
    color: ${props => props.primary === `true` ? color.white : base.color};
    background-color: ${props => props.primary ? font.link.hover.color : `transparent`};
  }
`

const Button = props => {
  const convertPrimary = props.primary.toString()
  return <Btn  {...props} primary={convertPrimary} />
}

export default Button

Button.propTypes = {
  to: PropTypes.string.isRequired,
  primary: PropTypes.bool,
}

Button.defaultProps = {
  to: null,
  primary: false,
}
