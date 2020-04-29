import React from "react"
import styled from "styled-components"
import { spacing } from "../styles/styles"
import { multiplyRem } from "../utils/maths"

import Layout from "../layout/Layout"
import { PageTitle } from "../layout/Heading"
import { ContainerMax } from "../layout/Grid"
import AdditionalLinks from "../components/AdditionalLink"
import DirectoryContact from "../components/DirectoryContact"
import { compareOrder } from "../utils/graphql"
import { MONTHS } from "../utils/static"

const UpdatedStatement = styled.p`
  font-style: italic;
  margin-top: ${multiplyRem(spacing.spacer, 2)};
  margin-bottom: 0;
`

export default ({ pageContext }) => {
  const {
    additional,
    contacts,
    description,
    metaData,
    title,
    updated,
  } = pageContext

  //==================================================
  // Get formatted date for last update
  let recentDate = 0
  if (contacts !== null) {
    for (let i = 0; i < contacts.length; i++) {
      const parsedDate = new Date(Date.parse(contacts[i].updatedAt))
      recentDate = parsedDate > recentDate ? parsedDate : recentDate
    }
  }
  const directoryUpdated = new Date(Date.parse(updated))
  recentDate = directoryUpdated > recentDate ? directoryUpdated : recentDate

  const recentHours = recentDate.getHours()
  const formattedHours = recentHours < 10 ? `0${recentHours}` : recentHours

  const recentMinutes = recentDate.getMinutes()
  const formattedMinutes =
    recentMinutes < 10 ? `0${recentMinutes}` : recentMinutes

  const dateString = `${recentDate.getDate()} ${
    MONTHS[recentDate.getMonth()]
  } ${recentDate.getFullYear()} at ${formattedHours}:${formattedMinutes}`

  //==================================================

  const ContactsList = () => {
    contacts.sort(compareOrder)
    let mappedContacts = contacts.map(contact => {
      return (
        <DirectoryContact
          key={contact.id}
          title={contact.title}
          description={contact.description}
          email={contact.email}
          phone1={contact.phoneNumber1}
          phone1Title={contact.phoneNumber1Title}
          phone1Description={contact.phoneNumber1Description}
          phone2={contact.phoneNumber2}
          phone2Title={contact.phoneNumber2Title}
          phone2Description={contact.phoneNumber2Description}
          phone3={contact.phoneNumber3}
          phone3Title={contact.phoneNumber3Title}
          phone3Description={contact.phoneNumber3Description}
          sms1={contact.smsNumber1}
          sms1Title={contact.smsNumber1Title}
          sms1Description={contact.smsNumber1Description}
          website={contact.website}
          websiteDescription={contact.websiteDescription}
          websiteTitle={contact.websiteTitle}
          website2={contact.website2}
          websiteDescription2={contact.websiteDescription2}
          websiteTitle2={contact.websiteTitle2}
          address={contact.address}
        />
      )
    })

    // Add additional links if available
    if(additional) {
      additional.sort(compareOrder)
      mappedContacts.push(<AdditionalLinks items={additional} key="additionalLinks" />)
    }
    return mappedContacts
  }

  const availableList =
    contacts !== null ? (
      <ContactsList />
    ) : (
      <ContainerMax>
        There are currently no contacts in this directory. Check back soon for
        information.
      </ContainerMax>
    )

  return (
    <Layout {...metaData}>
      <ContainerMax style={{paddingBottom: multiplyRem(spacing.spacer, 4)}}>
        <PageTitle>{title}</PageTitle>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <UpdatedStatement>
          This page was last updated on {dateString}
        </UpdatedStatement>
      </ContainerMax>
      <section>{availableList}</section>
    </Layout>
  )
}
