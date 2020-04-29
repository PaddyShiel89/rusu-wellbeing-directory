import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faFrown, faHeadSideMedical, faInfo, faSirenOn } from "@fortawesome/pro-solid-svg-icons"

import { breakpointMixin, color, font, positioning, spacing } from "../styles/styles"
import { divideRem } from "../utils/maths"
import { compareOrder } from "../utils/graphql"

const activeClassName = `active`

const Mobile = styled(props => <nav {...props} />)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${positioning.zIndices.navigation};

  ${breakpointMixin.navigationBreakpoint`
    display: none;
  `}

  ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    display: flex;
    width: 100%;
    min-height: ${spacing.mobileNavHeight[0]};
      
    ${breakpointMixin.min.sm`
      min-height: ${spacing.mobileNavHeight.sm};
    `}
  }

  li {
    min-width: ${props => (1 / props.items) * 100}%;
    flex: 0 0 ${props => (1 / props.items) * 100}%;
  }

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;

    font-size: 1.3rem;
    line-height: 1;
    position: relative;
    text-align: center;
    text-decoration: none;
    padding: ${divideRem(spacing.spacer, 2)} ${spacing.spacer};

    background-color: ${props =>
      props.theme.isDark ? color.gray[100] : color.gray[900]};
    color: ${props => (props.theme.isDark ? color.gray[900] : color.gray[100])};

    
    ${breakpointMixin.min.md`
      justify-content: center;
    `}

    &: hover {
      text-decoration: none;
      background-color: ${props =>
        props.theme.isDark
          ? font.link.darkThemeColor
          : font.link.color} !important;
      color: ${props =>
        props.theme.isDark ? color.gray[900] : color.gray[100]};
    }
  }

  svg {
    font-size: 2.4rem;
    margin-bottom: 5px;
  }

  .${activeClassName} {
    background-color: ${props =>
      props.theme.isDark
        ? font.link.darkThemeColor
        : font.link.color} !important;
  }
`

const mobileIcon = hubID => {
  switch(hubID) {
    // I Need Help Now
    case `81e9a700-5b5d-593d-9724-97537d4daa2d`:
      return faSirenOn
    // I'm Worried About
    case `0a02d119-903f-57e8-9e67-f2d25c9e7025`:
      return faFrown
    // I'm Need Advice On...
    case `888030aa-085e-59dc-b709-3f512c17d9e2`:
      return faComments
    // Mental Health Support
    case `a3b64bc0-2b7e-5031-b4ee-9256904b0450`:
      return faHeadSideMedical
    // Default
    default:
      return faInfo
  }
}

const MobileItem = ({ id, slug, title }) => {
  return (
    <li>
      <Link to={slug} partiallyActive={true} activeClassName={activeClassName}>
        <FontAwesomeIcon icon={mobileIcon(id)} />
        <span>{title}</span>
      </Link>
    </li>
  )
}

const MobileNavigation = () => (
  <StaticQuery
    query={query}
    render={data => {
      const hubs = []
      data.allContentfulHubPage.edges.map(({ node }) => hubs.push(node))
      hubs.sort(compareOrder)

      return (
        <Mobile items={hubs.length}>
          <ul>
            {hubs.map(hub => (
              <MobileItem
                key={hub.id}
                id={hub.id}
                slug={`/${hub.slug}`}
                title={hub.title}
              />
            ))}
          </ul>
        </Mobile>
      )
    }}
  />
)

export default MobileNavigation

const query = graphql`
  query MobileNav {
    allContentfulHubPage {
      edges {
        node {
          id
          order
          slug
          title
        }
      }
    }
  }
`
