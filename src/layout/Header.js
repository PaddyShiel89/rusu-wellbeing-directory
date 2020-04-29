import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import styled from "styled-components"
import {
  breakpointMixin,
  color,
  font,
  gridMixin,
  positioning,
  spacing,
  transition,
} from "../styles/styles"
import { divideRem } from "../utils/maths"
import DropdownMenu from "./DropdownMenu"
import RusuLogo from "../assets/rusu-logo.svg"

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
  background-color: ${props =>
    props.theme.isDark ? color.background.dark : color.background.light};

  ${breakpointMixin.navigationBreakpoint`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${positioning.zIndices.navigation};
  `}
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

  ${breakpointMixin.min.sm`
    padding-left: ${spacing.spacer};
    padding-right: ${spacing.spacer};
  `}
`

// Logo link. Styled for text logo by default
const Logo = styled(props => {
  const moddedProps = {...props}
  delete moddedProps.theme
  return <Link {...moddedProps} />
})`
  display: flex;
  align-items: center;
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
  line-height: inherit;
  white-space: nowrap;
  color: ${props =>
    props.theme.isDark ? font.link.darkThemeColor : font.link.color};
  transition: color ${transition.duration.default}ms ${transition.timingFunction.default};

  svg {
    height: 2rem;
    margin-right: 6px;
    fill: currentColor;
  }

  &:focus,
  &:hover {
    text-decoration: none;
    color: ${props =>
      props.theme.isDark ? font.link.hover.darkThemeColor : font.link.hover.color};
  }
`

// Navigation element
const Nav = styled.nav`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;

  ${breakpointMixin.navigationBreakpoint`
    display: flex !important;
  `}

  & ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;  
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => {
      const { siteMetadata } = data.site

      return (
        <Header>
          <MaxWidths>
            <Logo theme={props.theme} to={siteMetadata.homepageLink}>
              <RusuLogo /> {siteMetadata.title}
            </Logo>
            <Nav>
              <DropdownMenu items={data.allContentfulHubPage.edges} />
            </Nav>
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
    allContentfulHubPage {
      edges {
        node {
          id
          order
          slug
          title
          directory {
            id
            order
            slug
            title
          }
        }
      }
    }
  }
`
