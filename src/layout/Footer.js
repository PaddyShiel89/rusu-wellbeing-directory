import React from "react"
import styled from "styled-components"

import { ContainerMax } from "../layout/Grid"
import { color, spacing } from "../styles/styles"

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: ${spacing.spacer};
  padding-bottom: ${spacing.spacer};

  color: ${color.gray[100]};
  background-color: ${color.black};
`

export default ({ children }) => (
  <Footer>
    <ContainerMax>{children}</ContainerMax>
  </Footer>
)
