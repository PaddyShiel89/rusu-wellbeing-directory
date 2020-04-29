import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import {
  breakpointMixin,
  color,
  font,
  positioning,
  spacing,
} from "../styles/styles"
import { divideRem } from "../utils/maths"
import { compareOrder } from "../utils/graphql"

// Set navlink active classname to add active styles to the link if the user is browsing within the section
const activeClass = `active`

const styleVars = {
  linkBorder: `2px`,
  linkFontSize: font.base.size,
  linkLineHeight: font.base.lineHeight,
  linkPaddingX: divideRem(spacing.spacer, 2),
  linkPaddingY: divideRem(spacing.spacer, 2),
}

const DDList = styled.ul`
  display: none;

  ${breakpointMixin.navigationBreakpoint`
    display: flex;
    flex-direction: row;
    height: auto !important;
  `}

  & a {
    display: block;
    padding: calc(${styleVars.linkPaddingY} + ${styleVars.linkBorder})
      ${styleVars.linkPaddingX} ${styleVars.linkPaddingY};
    border: ${styleVars.linkBorder} solid transparent;
    font-weight: ${font.weight.bold};
    font-size: 1.6rem;

    &:hover {
      text-decoration: none;
      color: ${props =>
        props.theme.isDark ? color.black : color.white} !important;
      background-color: ${props =>
        props.theme.isDark
          ? font.link.darkThemeColor
          : font.link.color} !important;
      border-bottom-color: ${props =>
        props.theme.isDark
          ? font.link.darkThemeColor
          : font.link.color} !important;
    }

    &.${activeClass} {
      border-bottom-color: ${props =>
        props.theme.isDark ? font.link.darkThemeColor : font.link.color};

      + ul .${activeClass} {
        color: ${props => (props.theme.isDark ? color.white : color.black)};
        background-color: ${props =>
          props.theme.isDark ? font.link.color : font.link.darkThemeColor};
        border-bottom-color: transparent;
      }
    }
  }
`

const DDItem = styled(props => {
  const alteredProps = {
    children: props.children,
    className: props.className,
  }
  return <li {...alteredProps} />
})`
  position: relative;
  min-width: 17rem;
  text-align: center;

  ul {
    display: none;
    flex-direction: column;

    position: absolute;
    z-index: ${positioning.zIndices.dropdownNav};
    width: 100%;
    background-color: ${props =>
      props.theme.isDark ? color.black : color.white};
  }

  ${props =>
    props.open
      ? `
        ul {
          display: flex
        }
        & > a {
          background-color: ${
            props.theme.isDark ? font.link.darkThemeColor : font.link.color
          } !important;
          color: ${
            props.theme.isDark ? color.black : color.white
          } !important;    
        }`
      : null}
`

// Component for each directory under within a single dropdown item
const ItemSublinks = ({ parent, slug, title }) => {
  return (
    <li>
      <Link
        to={`/${parent}/${slug}`}
        partiallyActive={true}
        activeClassName={activeClass}
      >
        {title}
      </Link>
    </li>
  )
}

// Component for each dropdown item in the dropdown group
const DropdownItem = ({ active, click, directory, slug, title }) => {
  // Check if directory dropdowns need to be added
  let directoriesEl = null
  if (directory !== null) {
    directory.sort(compareOrder)

    directoriesEl = (
      <DDItem open={active}>
        <Link
          to={`/${slug}`}
          onClick={click}
          partiallyActive={true}
          activeClassName={"active"}
        >
          {title}
        </Link>
        <ul>
          {directory.map(item => (
            <ItemSublinks key={item.id} parent={slug} {...item} />
          ))}
        </ul>
      </DDItem>
    )
  }

  return directoriesEl
}

// Dropdown group component
const DropdownList = ({ items }) => {
  const [currentDropdown, toggleDropdown] = useState(null)

  // Sort hub pages
  const hubs = []
  items.map(({ node }) => hubs.push(node))
  hubs.sort(compareOrder)

  const selectDropdown = (item, e) => {
    e.preventDefault()

    // Check if clicked dropdown is already open
    const alreadyOpen = currentDropdown === item ? null : item

    // Toggle currentDropdown
    toggleDropdown(alreadyOpen)
  }

  return (
    <DDList>
      {hubs.map((hub, index) => (
        <DropdownItem
          key={hub.id}
          active={currentDropdown === index}
          {...hub}
          click={selectDropdown.bind(this, index)}
        />
      ))}
    </DDList>
  )
}

export default DropdownList

DropdownList.propTypes = {
  items: PropTypes.array,
}

DropdownList.defaultProps = {
  items: null,
}
