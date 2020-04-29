import React from "react"
import styled from "styled-components"
import { gridMixin } from "../styles/styles"

export const ContainerMax = styled.div`
  ${gridMixin.container()}
  ${gridMixin.containerMaxWidths()}
`
export const Row = styled.div`
  ${gridMixin.row()}
`

export const Col = styled(props => {
  const moddedProps = {...props}
  delete moddedProps.cols
  return <div {...props} /> })`
  ${gridMixin.colBase()}
  ${gridMixin.col(props => props.cols)}
`