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
  transition,
  color
} from "../styles/styles"
import { divideRem } from "../utils/maths"


// Set breakpoint at which mobile navigation is replaced with desktop navigation
const navigationBreakpoint = breakpointMixin.min.lg

// Set navlink active classname to add active styles to the link if the user is browsing within the section
const activeClass = `active`

const styleVars = {
  linkBorder: `2px`,
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
    padding: calc(${styleVars.linkPaddingY} + ${styleVars.linkBorder}) ${spacing.spacer} ${styleVars.linkPaddingY};
    border-bottom: ${styleVars.linkBorder} solid transparent;
    font-size: 1.6rem;

    &:hover {
      text-decoration: none;
      color: ${props => props.theme.isDark ? color.black : color.white} !important;
      background-color: ${props => props.theme.isDark ? font.link.darkThemeColor : font.link.color} !important;
      border-bottom-color: ${props => props.theme.isDark ? font.link.darkThemeColor : font.link.color} !important;
    }

    ${navigationBreakpoint`
      padding-left: ${spacing.spacer};
      padding-right: ${spacing.spacer};
    `}
  }

  & .${activeClass} {
    border-bottom-color: ${props => props.theme.isDark ? font.link.darkThemeColor : font.link.color};
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
    <Link to={data.link} partiallyActive={true} activeClassName={activeClass}>{data.name}</Link>
  </li>
)

const navID = `TopNav`

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
              aria-controls={navID}
              aria-expanded={menuOpen}
              aria-label={`${menuOpen ? `Close` : `Open`} navigation menu`}
              type="button"
              onClick={() => toggleMenu(!menuOpen)}
            >
              Menu
            </NavButton>
              <Collapse in={menuOpen} timeout={transition.duration.collapse}>
              <Nav id={navID} aria-hidden={!menuOpen}>
                <ul>
                  {siteMetadata.menuLinks.map(item => (
                    <NavItem {...item} key={`${navID}${item.name}`} />
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
