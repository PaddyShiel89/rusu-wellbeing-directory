import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "../components/Buttons"

import { color, font, spacing } from "../styles/styles"
import { divideRem } from "../utils/maths"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight } from "@fortawesome/pro-solid-svg-icons"

const styleVar = {
  borderColor: color.gray[400],
  borderRadius: `8px`,
  borderWidth: `0`,
}

const StyledHubCard = styled.div`
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
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.012), 0 6px 5px rgba(0, 0, 0, 0.024),
    0 9px 10px rgba(0, 0, 0, 0.036), 0 12px 12px rgba(0, 0, 0, 0.048);

  & header {
    padding: ${divideRem(spacing.spacer, 2)} ${spacing.spacer} 0;
    margin-bottom: 0;
    background-color: ${props =>
      props.theme.isDark ? color.black : color.white};
  }

  & h4 {
    margin-bottom: 0;
    font-size: ${font.headings.h4.size};
    font-weight: ${font.headings.h4.weight};
    line-height: ${font.headings.lineHeight};
    text-transform: ${font.headings.h4.transform};
  }

  & > div {
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
const HubCard = props => {
  return (
    <StyledHubCard>
      <header>
        <h4>{props.title}</h4>
      </header>
      <div>{props.children}</div>
      <footer>
        <Button
          aria-label={`Browse the '${props.title}' directory`}
          primary
          to={props.link}
        >
          <div style={{ display: `flex`, alignItems: `center` }}>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ marginRight: spacing.spacer, fontSize: font.base.size }}
            />
            Browse the directory
          </div>
        </Button>
      </footer>
    </StyledHubCard>
  )
}

export default HubCard

HubCard.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
}

HubCard.defaultProps = {
  link: null,
  title: null,
}
