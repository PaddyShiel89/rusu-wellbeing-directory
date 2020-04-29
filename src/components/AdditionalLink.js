import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/pro-solid-svg-icons"

import { ContainerMax } from "../layout/Grid"
import { color, spacing } from "../styles/styles"
import { multiplyRem } from "../utils/maths"

const AdditionalLinks = styled(props => {
  return (
    <article className={props.className}>
      <ContainerMax>
        <h2>Additional links</h2>
        <ul>
          {props.items.map(item => (
            <li key={item.id}>
              <FontAwesomeIcon icon={faGlobe} title="Website" />
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </ContainerMax>
    </article>
  )
})`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  padding-top: ${multiplyRem(spacing.spacer, 4)};
  padding-bottom: ${multiplyRem(spacing.spacer, 4)};

  &:nth-child(odd) {
    background-color: ${props =>
      props.theme.isDark ? color.black : color.white};
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-bottom: ${spacing.spacer};
  }

  svg {
    margin-right: ${spacing.spacer};
  }
`

export default AdditionalLinks

AdditionalLinks.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
}

AdditionalLinks.defaultProps = {
  link: null,
  title: null,
}
