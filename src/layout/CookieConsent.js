import React from "react"
import styled from "styled-components"

import { getCookie, setCookie } from "../utils/cookies"
import { breakpointMixin, positioning, color, spacing } from "../styles/styles"
import { ContainerMax } from "../layout/Grid"
import { ButtonPrimary } from "../components/Buttons"
import { multiplyRem } from "../utils/maths"

const CookieConsent = styled(props => {
  const gaCookie = `google-analytics`
  const ga = getCookie(gaCookie)

  if (ga === ("true" || "false")) {
    return null
  } else {
    return (
      <section className={props.className} style={{display: `block`}}>
        <ContainerMax>
          <div>
            <p>
              The RUSU Welfare Directory website uses cookies to
              analyse how users engage with the website.
            </p>
            <p><strong>Please accept or reject cookies for your device.</strong></p>
          </div>
          <div>
            <ButtonPrimary to="/" icon={null} onClick={() => setCookie(gaCookie, true, 90)}>
              Accept cookies
            </ButtonPrimary>
            <ButtonPrimary to="/" icon={null} onClick={() => setCookie(gaCookie, false, 90)}>Reject cookies</ButtonPrimary>
          </div>
        </ContainerMax>
      </section>
    )
  }
})`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${positioning.zIndices.cookieConsent};

  display: none;
  padding-top: ${multiplyRem(spacing.spacer, 2)};
  padding-bottom: ${multiplyRem(spacing.spacer, 2)};

  background-color: ${props => props.theme.isDark ? color.primary[800] : color.primary[200] };

  a {
    width: 100%;
      
    ${breakpointMixin.min.sm`
      width: auto;
    `}

    div {
      justify-content: center;
    }

    &:not(:last-child) {
      margin-bottom: ${spacing.spacer};
      
    ${breakpointMixin.min.sm`
      margin-bottom: 0;
      margin-right: ${spacing.spacer};
    `}
    }
  }
`

export default CookieConsent