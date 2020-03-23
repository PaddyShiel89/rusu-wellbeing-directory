import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight } from "@fortawesome/pro-solid-svg-icons"

import { color, font, spacing } from "../styles/styles"
import { divideRem } from "../utils/maths"

const base = {
  borderRadius: `42px`,
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
  color: ${base.color};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: ${base.borderWidth} solid transparent;
  padding: ${base.paddingY} ${base.paddingX};
  transition: ${base.transition};
  border-radius: ${base.borderRadius};
  overflow: hidden;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${base.color};
    background-color: transparent;
  }

  ${props =>
    props.styling === `primary`
      ? `
      color: ${props.theme.isDark ? color.black : color.white};
      background-color: ${
        props.theme.isDark ? font.link.darkThemeColor : font.link.color
      };
      &:hover, &:focus {
        color: ${props.theme.isDark ? color.black : color.white};
        background-color: ${
          props.theme.isDark
            ? font.link.hover.darkThemeColor
            : font.link.hover.color
        };
      }
    `
      : null}
`

const Button = props => {
  return <Btn {...props} />
}

const Icon = styled(props => <FontAwesomeIcon {...props} />)`
  margin-right: ${spacing.spacer};
  font-size: ${font.size.base};
`

export default Button

Button.propTypes = {
  to: PropTypes.string.isRequired,
  styling: PropTypes.string,
}

Button.defaultProps = {
  to: null,
  styling: null,
}

// ButtonWrapped is to align multiple children in a button, such as when using an icon
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonWrapped = props => {
  const moddedProps = { ...props }
  delete moddedProps.children

  return (
    <Btn {...moddedProps}>
      <BtnWrapper>{props.children}</BtnWrapper>
    </Btn>
  )
}

export const ButtonPrimary = props => {
  const moddedProps = { ...props }
  delete moddedProps.children

  return (
    <Btn {...moddedProps} styling="primary">
      <BtnWrapper>
        <Icon icon={faArrowAltCircleRight} />
        {props.children}
      </BtnWrapper>
    </Btn>
  )
}
