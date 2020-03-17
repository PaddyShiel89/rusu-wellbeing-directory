import styled from "styled-components"
import { gridMixin } from "../styles/styles"

export const ContainerMax = styled.div`
  ${gridMixin.container()}
  ${gridMixin.containerMaxWidths()}
`
export const Row = styled.div`
  ${gridMixin.row()}
`