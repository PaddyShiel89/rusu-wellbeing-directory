import React from "react"
import styled from "styled-components"

import {
  breakpointMixin,
  gridMixin,
  spacing,
} from "../styles/styles"
import { multiplyRem } from "../utils/maths"
import { Row } from "../layout/Grid"


const ChildItem = styled.div`
  ${gridMixin.colBase()}
  ${gridMixin.col(12)}
  margin-bottom: ${multiplyRem(spacing.spacer, 2)};

  ${breakpointMixin.min.md`
    ${gridMixin.col(6)}
  `}
`

export const CardGroup = props => (
  <Row>
    {props.children.map((child, index) => (
      <ChildItem key={index}>{child}</ChildItem>
    ))}
  </Row>
)