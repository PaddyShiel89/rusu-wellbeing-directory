import React from "react"

import Layout from "../../layout/Layout"
import { PageTitle } from "../../layout/Heading"
import { ContainerMax } from "../../layout/Grid"
import { ButtonPrimary } from "../../components/Buttons"

export default () => {
  const metaData = {
    title: `Submit a Contact`,
    description: `Do you know an organisation that should be in the welfare directory? Are you featured in our directory and have updated contact details? Submit these here.`,
    pathname: `/submit-a-contact`
  }

  return (
  <Layout {...metaData}>
    <ContainerMax>
      <PageTitle>Contact Submissions - Sent</PageTitle>
      <p>Your message has been sent.</p>
      <ButtonPrimary to={"/"}>Return to the homepage</ButtonPrimary>
    </ContainerMax>
  </Layout>
)}
