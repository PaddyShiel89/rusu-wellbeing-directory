import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faPhoneAlt } from "@fortawesome/pro-solid-svg-icons"

import { multiplyRem } from "../utils/maths"
import { color, font, spacing } from "../styles/styles"
import { ContainerMax } from "../layout/Grid"

const StyledDirectoryContact = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  padding-top: ${multiplyRem(spacing.spacer, 4)};
  padding-bottom: ${multiplyRem(spacing.spacer, 4)};

  &:nth-child(odd) {
    background-color: ${props => props.theme.isDark ? color.black : color.white};
  }
`

const ContactWrapper = styled.div`
  display: flex;
  align-items: top;

  &:not(:last-child) {
    margin-bottom: ${spacing.spacer};
  }
`

const WebsiteLink = styled.a`
  overflow-wrap: break-word;
  word-break: break-word;
`

const Icon = styled(props => <FontAwesomeIcon {...props} aria-hidden="true" />)`
  margin-top: 0.5rem;
  margin-right: ${spacing.spacer};
`

const ItemDescription = styled.div`
  font-size: ${font.size.sm};
`

const PhoneContact = data => {
  const description = data.description ? <ItemDescription>{data.description}</ItemDescription> : null
  const title = data.title ? <span>{data.title}: </span> : null

  const formatPhone = num => num.replace(/\s+/g, ``)

  return (
    <ContactWrapper>
      <Icon
        icon={faPhoneAlt}
        title={`Phone`}
      />
      <div>
        {title}<a href={`tel:${formatPhone(data.number)}`}>{data.number}</a>
        {description}
      </div>
    </ContactWrapper>
  )
}

const WebsiteContact = data => (
  <ContactWrapper>
    <Icon
      icon={faGlobe}
      title={`Website`}
      />
    <WebsiteLink href={data.link}>{data.link}</WebsiteLink>
  </ContactWrapper>
)

const DirectoryContact = props => {
  const description = props.description ? <p>{props.description}</p> : null

  const p1 = props.phone1 ? (
    <PhoneContact
      number={props.phone1}
      description={props.phone1Description}
      title={props.phone1Title}
    />
  ) : null

  const p2 = props.phone2 ? (
    <PhoneContact
      number={props.phone2}
      description={props.phone2Description}
      title={props.phone2Title}
    />
  ) : null

  const p3 = props.phone3 ? (
    <PhoneContact
      number={props.phone3}
      description={props.phone3Description}
      title={props.phone3Title}
    />
  ) : null

  const web = props.website ? <WebsiteContact link={props.website} /> : null

  return (
    <StyledDirectoryContact>
      <ContainerMax>
      <header>
        <h3>{props.title}</h3>
      </header>
      {description}
      <div>
        {p1}
        {p2}
        {p3}
        {web}
      </div>
      </ContainerMax>
    </StyledDirectoryContact>
  )
}

export default DirectoryContact

DirectoryContact.propTypes = {
  description: PropTypes.string,
  email: PropTypes.string,
  phone1: PropTypes.string,
  phone1Description: PropTypes.string,
  phone1Title: PropTypes.string,
  phone2: PropTypes.string,
  phone2Description: PropTypes.string,
  phone2Title: PropTypes.string,
  title: PropTypes.string,
  website: PropTypes.string,
}

DirectoryContact.defaultProps = {
  description: null,
  email: null,
  phone1: null,
  phone1Description: null,
  phone1Title: null,
  phone2: null,
  phone2Description: null,
  phone2Title: null,
  title: null,
  website: null,
}
