import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Col } from "../layout/Grid"
import {
  color,
  font,
  form,
  gridMixin,
  spacing,
  breakpointMixin,
} from "../styles/styles"
import { buttonMixin } from "../styles/styles"

const Form = styled( props => {
  return (
    <form
      name={props.name}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={props.className}
    >
      <input type="hidden" name="form-name" value="contact" />
      {props.children}
      <Col>
        <button type="reset">Reset form</button>
        <button type="submit">Submit</button>
      </Col>
    </form>
  )
})`
  ${gridMixin.row()}

  button {
    ${buttonMixin.base}

    &[type="submit"] {
      ${props => buttonMixin.primary(props)}
    }

    &[type="reset"] {
      ${props => buttonMixin.secondary(props)}
    }

    &:not(:last-child) {
      margin-right: ${spacing.spacer};
    }
  }
`

export default Form

Form.propTypes = {
  name: PropTypes.string.isRequired,
}

Form.defaultProps = {
  name: null,
}

//==================================================

// Email field
const InputField = ({ id, label, isRequired, type }) => {
  return (
    <FormGroup>
      <label htmlFor={id}>{label}</label>
      <FormInput type={type} id={id} name={id} required={isRequired} />
    </FormGroup>
  )
}

//==================================================

// Email field
export const EmailField = ({ id, label, isRequired }) => {
  return (
    <InputField id={id} label={label} isRequired={isRequired} type="email" />
  )
}

//==================================================

// Phone field
export const NumberField = ({ id, label, isRequired }) => {
  return (
    <InputField id={id} label={label} isRequired={isRequired} type="number" />
  )
}

//==================================================

// Text field
export const TextField = ({ id, label, isRequired }) => {
  return (
    <InputField id={id} label={label} isRequired={isRequired} type="text" />
  )
}

//==================================================

// Textarea
export const TextArea = ({ id, label, isRequired, rows }) => {
  let enableRows = rows || `5`
  return (
    <FormGroup fullWidth={true}>
      <label htmlFor={id}>{label}</label>
      <FormInput
        id={id}
        rows={enableRows}
        required={isRequired}
        element="textarea"
      />
    </FormGroup>
  )
}

//==================================================

// Wrap most label & input elements in a form group
const FormGroup = styled(props => {
  const moddedProps = { ...props }
  delete moddedProps.fullWidth
  return <div {...moddedProps} />
})`
  ${gridMixin.colBase()}
  ${gridMixin.col(12)}
  ${props =>
    props.fullWidth
      ? null
      : breakpointMixin.formBreakpoint`
      ${gridMixin.col(6)}
    `}
  margin-bottom: ${form.group.marginBottom};

  &:last-child {
    margin-bottom: 0;
  }
`
//==================================================

const FormInput = styled(props => {
  const moddedProps = { ...props }
  delete moddedProps.element
  return props.element === `textarea` ? (
    <textarea {...moddedProps} />
  ) : (
    <input {...moddedProps} />
  )
})`
  display: block;
  width: 100%;
  height: ${props =>
    props.element === `textarea` ? `auto` : form.input.height};
  padding: ${form.input.paddingY} ${form.input.paddingX};
  font-size: ${font.base.size};
  font-weight: ${font.base.weight};
  line-height: ${form.input.lineHeight};
  color: ${props => (props.theme.isDark ? color.gray[300] : color.gray[700])};
  background-color: ${props =>
    props.theme.isDark ? color.black : color.white};
  background-clip: padding-box;
  border: 1px solid
    ${props => (props.theme.isDark ? color.gray[600] : color.gray[400])};
  border-radius: 3px;

  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0
      ${props => (props.theme.isDark ? color.gray[300] : color.gray[700])};
  }

  &::placeholder {
    color: ${props => (props.theme.isDark ? color.gray[400] : color.gray[600])};
    opacity: 1;
  }

  &:focus {
    color: ${props => (props.theme.isDark ? color.gray[300] : color.gray[700])};
    background-color: ${props =>
      props.theme.isDark ? color.black : color.white};
    border-color: ${props =>
      props.theme.isDark ? color.primary[600] : color.primary[400]};
    outline: 0;
  }

  &:disabled,
  &[readonly] {
    background-color: ${props =>
      props.theme.isDark ? color.gray[800] : color.gray[200]};
    opacity: 1;
  }
`
