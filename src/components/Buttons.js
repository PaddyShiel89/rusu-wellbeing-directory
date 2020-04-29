import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight } from "@fortawesome/pro-solid-svg-icons"

import { buttonMixin, font, spacing } from "../styles/styles"

const Btn = styled(props => {
  const moddedProps = {...props}
  delete moddedProps.styling
  return <Link {...moddedProps} />
})`
  ${buttonMixin.base}

  ${props =>
    props.styling === `primary`
      ? buttonMixin.primary(props)
      : null}

  ${props =>
    props.styling === `secondary`
      ? buttonMixin.secondary(props)
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
  const icon =
    props.icon === undefined ? <Icon icon={faArrowAltCircleRight} /> : null

  return (
    <Btn {...moddedProps} styling="primary">
      <BtnWrapper>
        {icon}
        {props.children}
      </BtnWrapper>
    </Btn>
  )
}

export const ButtonSecondary = props => {
  const moddedProps = { ...props }
  delete moddedProps.children
  const icon =
    props.icon === null ? <Icon icon={faArrowAltCircleRight} /> : null

  return (
    <Btn {...moddedProps} styling="secondary">
      <BtnWrapper>
        {icon}
        {props.children}
      </BtnWrapper>
    </Btn>
  )
}
