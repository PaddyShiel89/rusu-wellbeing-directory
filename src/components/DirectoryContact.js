import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faGlobe,
  faPhoneAlt,
  faSms,
} from "@fortawesome/pro-solid-svg-icons"

import { multiplyRem } from "../utils/maths"
import { color, font, spacing } from "../styles/styles"
import { ContainerMax } from "../layout/Grid"

const ContactWrapper = styled.div`
  display: flex;
  align-items: top;

  &:not(:last-child) {
    margin-bottom: ${spacing.spacer};
  }
`

const ContactLink = styled.a`
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
const EmailContact = ({ email }) => (
  <ContactWrapper>
    <Icon icon={faEnvelope} title={`Email`} />
    <ContactLink href={`mailto:${email.toLowerCase()}`}>
      {email.toLowerCase()}
    </ContactLink>
  </ContactWrapper>
)

const PhoneContact = data => {
  const description = data.description ? (
    <ItemDescription>{data.description}</ItemDescription>
  ) : null
  const title = data.title ? <span>{`${data.title}: `}</span> : null

  // Remove spaces from phone number
  const formatPhone = num => num.replace(/\s+/g, ``)

  return (
    <ContactWrapper>
      <Icon icon={faPhoneAlt} title={`Phone`} />
      <div>
        {title}
        <ContactLink href={`tel:${formatPhone(data.number)}`}>
          {formatPhone(data.number)}
        </ContactLink>
        {description}
      </div>
    </ContactWrapper>
  )
}

const SMSContact = data => {
  const description = data.description ? (
    <ItemDescription>{data.description}</ItemDescription>
  ) : null
  const title = data.title ? <span>{`${data.title}: `}</span> : null

  return (
    <ContactWrapper>
      <Icon icon={faSms} title={`SMS`} />
      <div>
        {title}
        <ContactLink href={`sms:${data.link.toLowerCase()}`}>
          {data.link.toLowerCase()}
        </ContactLink>
        {description}
      </div>
    </ContactWrapper>
  )
}

const WebsiteContact = data => {
  const description = data.description ? (
    <ItemDescription>{data.description}</ItemDescription>
  ) : null
  const title = data.title ? <span>{`${data.title}: `}</span> : null

  return (
    <ContactWrapper>
      <Icon icon={faGlobe} title={`Website`} />
      <div>
        {title}
        <ContactLink href={data.link.toLowerCase()} target="_blank" rel="noopener noreferrer">
          {data.link.toLowerCase()}
        </ContactLink>
        {description}
      </div>
    </ContactWrapper>
  )
}

const DirectoryContact = styled(props => {

  const description = props.description ? (
    <div
      dangerouslySetInnerHTML={{
        __html: props.description.childMarkdownRemark.html,
      }}
    />
  ) : null

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

  const web = props.website ? (
    <WebsiteContact
      link={props.website}
      description={props.websiteDescription}
      title={props.websiteTitle}
    />
  ) : null

  const web2 = props.website2 ? (
    <WebsiteContact
      link={props.website2}
      description={props.websiteDescription2}
      title={props.websiteTitle2}
    />
  ) : null

  const email = props.email ? <EmailContact email={props.email} /> : null

  const text1 = props.sms1 ? (
    <SMSContact
      link={props.sms1}
      description={props.sms1Description}
      title={props.sms1Title}
    />
  ) : null

  return (
    <article className={props.className} >
      <ContainerMax>
        <header>
          <h3>{props.title}</h3>
        </header>
        {description}
        <div>
          {web}
          {web2}
          {email}
          {p1}
          {p2}
          {p3}
          {text1}
        </div>
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
`

export default DirectoryContact

DirectoryContact.propTypes = {
  description: PropTypes.object,
  email: PropTypes.string,
  phone1: PropTypes.string,
  phone1Description: PropTypes.string,
  phone1Title: PropTypes.string,
  phone2: PropTypes.string,
  phone2Description: PropTypes.string,
  phone2Title: PropTypes.string,
  sms1: PropTypes.string,
  sms1Description: PropTypes.string,
  sms1Title: PropTypes.string,
  title: PropTypes.string,
  website: PropTypes.string,
  website2: PropTypes.string,
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
  sms1: null,
  sms1Description: null,
  sms1Title: null,
  title: null,
  website: null,
  website2: null,
}
