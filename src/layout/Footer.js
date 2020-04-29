import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb, faLightbulbOn } from "@fortawesome/pro-solid-svg-icons"
import Logo from "../assets/rusu-logo.svg"

import { ContainerMax, Row, Col } from "../layout/Grid"
import { breakpointMixin, color, font, spacing } from "../styles/styles"
import { divideRem } from "../utils/maths"

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: ${spacing.spacer};
  padding-bottom: ${spacing.spacer};
  margin-bottom: ${spacing.mobileNavHeight[0]};

  color: ${color.gray[100]};
  background-color: ${color.primary[900]};

  ${breakpointMixin.min.sm`
    margin-bottom: ${spacing.mobileNavHeight.sm};
  `}

  ${breakpointMixin.navigationBreakpoint`
    margin-bottom: 0;
  `}

  a, label {
    color: ${font.link.darkThemeColor};
    text-decoration: ${font.link.decoration};
    background-color: transparent;

    &:hover {
      color: ${font.link.hover.darkThemeColor};
      text-decoration: none;
    }
  }

  & svg {
    width: 100%;
    max-width: 10rem;
    fill: currentColor;
  }
`

export default ({ darkMode }) => (
  <Footer>
    <ContainerMax>
      <Row>
        <FooterContainer>
          <a
            href="https://rusu.co.uk"
            style={{ marginBottom: divideRem(spacing.spacer, 2) }}
          >
            <Logo />
          </a>
          <DarkMode {...darkMode} />
        </FooterContainer>
        <FooterContainer>
          <Link to="/submit-a-contact">Submit a Contact</Link>
          <a href="https://www.rusu.co.uk/privacy-policy/">Privacy Policy</a>
          <a href="https://www.rusu.co.uk/terms-and-conditions/">
            Terms &amp; Conditions
          </a>
          <Link to="/sitemap.xml">Sitemap</Link>
        </FooterContainer>
      </Row>
    </ContainerMax>
  </Footer>
)

const FooterContainer = styled(props => <Col {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  ${breakpointMixin.min.md`
    max-width: 50%;
    flex: 0 0 50%;
  `}
`

const DarkMode = styled(props => {
  const inputID = `darkModeInput`
  const moddedProps = { ...props }
  delete moddedProps.isDark
  delete moddedProps.toggle

  return (
    <div {...moddedProps}>
      <input
        id={inputID}
        type="checkbox"
        onChange={() => props.toggle()}
        checked={props.isDark}
      />
      <label htmlFor={inputID}>
        Toggle dark mode
        <FontAwesomeIcon
          icon={props.isDark ? faLightbulb : faLightbulbOn}
          title={`Toggle dark mode`}
        />
      </label>
    </div>
  )
})`
  input {
    position: absolute;
    left: 0;
    z-index: -1;
    opacity: 0;
  }

  input:focus + label {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  label {
    margin-bottom: 0;
    cursor: pointer;

    svg {
      margin-left: ${spacing.spacer};
    }
  }
`
