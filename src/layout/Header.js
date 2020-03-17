import React, { useState } from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { Collapse } from "react-bootstrap"

import styled from "styled-components"
import {
  border,
  breakpointMixin,
  font,
  gridMixin,
  spacing,
  transition
} from "../styles/styles"
import { divideRem } from "../utils/maths"


// Set breakpoint at which mobile navigation is replaced with desktop navigation
const navigationBreakpoint = breakpointMixin.min.lg

const componentVars = {
  linkFontSize: font.base.size,
  linkLineHeight: font.base.lineHeight,
  linkPaddingY: divideRem(spacing.spacer, 2),
}

// Parent header element
const Header = styled.header`
  ${gridMixin.container()}
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: ${divideRem(spacing.spacer, 2)};
  padding-bottom: ${divideRem(spacing.spacer, 2)};
`

// Wrapper element inside header that keeps elements centered on the page
const MaxWidths = styled.div`
  ${gridMixin.containerMaxWidths()}
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  ${breakpointMixin.min.sm`
    padding-left: ${spacing.spacer};
    padding-right: ${spacing.spacer};
  `}
`

// Logo link. Styled for text logo by default
const Logo = styled(props => {
  const alteredProps = {
    to: props.to,
    children: props.children,
    className: props.className,
  }
  return <Link {...alteredProps} />
})`
  display: inline-block;
  font-size: ${font.size.lg};
  line-height: inherit;
  white-space: nowrap;
  color: ${props =>
    props.theme.isDark ? font.base.darkThemeColor : font.base.color};

  &:focus,
  &:hover {
    text-decoration: none;
    color: ${props =>
      props.theme.isDark ? font.base.darkThemeColor : font.base.color};
  }
`

// Navigation element
const Nav = styled.nav`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;

  ${navigationBreakpoint`
    display: flex !important;
    flex-basis: auto;
  `}

  & ul {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    
    ${navigationBreakpoint`
      flex-direction: row;
      height: auto !important;
      margin-left: auto;
    `}
  }

  & a {
    display: block;
    padding: ${componentVars.linkPaddingY} 0;

    &:hover {
      text-decoration: none;
    }

    ${navigationBreakpoint`
      padding-left: ${spacing.spacer};
      padding-right: ${spacing.spacer};
    `}
  }
`

// Button element for toggling mobile navigation
const NavButton = styled.button`
  margin-left: auto;
  padding: ${divideRem(spacing.spacer, 2)} ${divideRem(spacing.spacer, 4)};
  font-size: ${font.size.lg};
  line-height: 1;
  background-color: transparent;
  border: ${border.width.default} solid transparent;
  border-radius: ${border.radius.default};
  color: inherit;
  ${navigationBreakpoint`
    display: none;
  `}
`

// Navigation item component
const NavItem = data => (
  <li>
    <Link to={data.link}>{data.name}</Link>
  </li>
)

export default props => (
  <StaticQuery
    query={query}
    render={data => {
      const [menuOpen, toggleMenu] = useState(false)
      const { siteMetadata } = data.site
      return (
        <Header>
          <MaxWidths>
            <Logo theme={props.theme} to={siteMetadata.homepageLink}>
              {siteMetadata.title}
            </Logo>

            <NavButton
              aria-controls="TopNav"
              aria-expanded={menuOpen}
              aria-label={`${menuOpen ? `Close` : `Open`} navigation menu`}
              type="button"
              onClick={() => toggleMenu(!menuOpen)}
            >
              Menu
            </NavButton>
              <Collapse in={menuOpen} timeout={transition.duration.collapse}>
              <Nav id="TopNav" aria-hidden={!menuOpen}>
                <ul>
                  {siteMetadata.menuLinks.map(item => (
                    <NavItem {...item} key={`TopNav${item.name}`} />
                  ))}
                </ul>
                </Nav>
              </Collapse>
          </MaxWidths>
        </Header>
      )
    }}
  />
)

const query = graphql`
  query Header {
    site {
      siteMetadata {
        homepageLink
        menuLinks {
          name
          link
        }
        title
      }
    }
  }
`
