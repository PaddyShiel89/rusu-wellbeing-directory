import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import { breakpointMixin, color, gridMixin, spacing } from "../styles/styles"
import { divideRem, multiplyRem } from "../utils/maths"
import { ButtonPrimary } from "../components/Buttons"
import { Row } from "../layout/Grid"

const styleVar = {
  borderColor: color.gray[400],
  borderRadius: `8px`,
  borderWidth: `0`,
}

const HubCard = styled(props => {
  const img = props.image ? (
    <Img fluid={props.image.fluid} alt={props.image.description} />
  ) : null

  return (
    <div className={props.className}>
      {img}
      <header>
        <h3>{props.title}</h3>
      </header>
      <section>
        <p>{props.description}</p>
      </section>
      <footer>
        <ButtonPrimary
          aria-label={`Browse the '${props.title}' directory`}
          to={props.link}
        >
          Browse the directory
        </ButtonPrimary>
      </footer>
    </div>
  )
})`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${props =>
    props.theme.isDark ? color.black : color.white};
  background-clip: border-box;
  border: ${styleVar.borderWidth} solid ${styleVar.borderColor};
  border-radius: ${styleVar.borderRadius};
  overflow: hidden;
  height: 100%;
  box-shadow: 0 3px 2px
      rgba(0, 0, 0, ${props => (props.theme.isDark ? `0.036` : `0.012`)}),
    0 6px 5px
      rgba(0, 0, 0, ${props => (props.theme.isDark ? `0.072` : `0.024`)}),
    0 9px 10px
      rgba(0, 0, 0, ${props => (props.theme.isDark ? `0.108` : `0.036`)}),
    0 12px 12px
      rgba(0, 0, 0, ${props => (props.theme.isDark ? `0.144` : `0.048`)});

  & header {
    padding: ${divideRem(spacing.spacer, 2)} ${spacing.spacer} 0;
    margin-bottom: 0;
    background-color: ${props =>
      props.theme.isDark ? color.black : color.white};
  }

  & h3 {
    margin-bottom: 0;
  }

  & section {
    flex: 1 1 auto;
    min-height: 1px;
    padding: ${spacing.spacer};

    & p:last-child {
      margin-bottom: 0;
    }
  }

  & footer {
    padding: 0 ${spacing.spacer} ${spacing.spacer};
    background-color: ${props =>
      props.theme.isDark ? color.black : color.white};
  }
`

export default HubCard

HubCard.propTypes = {
  alt: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  link: PropTypes.string,
  title: PropTypes.string,
}

HubCard.defaultProps = {
  alt: null,
  description: null,
  image: null,
  link: null,
  title: null,
}

//==================================================

// Group hub cards within a row for correct alignment
const ChildItem = styled.div`
  ${gridMixin.colBase()}
  ${gridMixin.col(12)}
  margin-bottom: ${multiplyRem(spacing.spacer, 2)};

  ${breakpointMixin.min.md`
    ${gridMixin.col(6)}
  `}
`

export const HubCardGroup = props => (
  <Row>
    {props.children.map((child, index) => (
      <ChildItem key={index}>{child}</ChildItem>
    ))}
  </Row>
)
