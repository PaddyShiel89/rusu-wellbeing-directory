import React from "react"

import Layout from "../../layout/Layout"
import { PageTitle } from "../../layout/Heading"
import { ContainerMax } from "../../layout/Grid"
import Form, { EmailField, NumberField, TextArea, TextField } from "../../components/Forms"

import { spacing } from "../../styles/styles"
import { multiplyRem } from "../../utils/maths"

export default () => {
  const metaData = {
    title: `Submit a Contact`,
    description: `Do you know an organisation that should be in the welfare directory? Are you featured in our directory and have updated contact details? Submit these here.`,
    pathname: `/submit-a-contact`
  }

  return (
  <Layout {...metaData}>
    <ContainerMax style={{paddingBottom: multiplyRem(spacing.spacer, 4)}}>
      <PageTitle>Submit a Contact</PageTitle>
      <p>
        We aim to keep the RUSU Welfare Directory as up to date and relevant as possible. If you know of an organisation that should be featured in the directory, or if you represent an organisation featured in the directory that has changed its contact details, please let us know using the form below.
      </p>
      <Form name="contact-submissions" action={`./success`}>
        <TextField id="name" label="Your name" isRequired />
        <EmailField id="email" label="Your email address" isRequired />
        <TextField id="orgName" label="Organisation name" isRequired />
        <TextField id="orgDescription" label="Organisation description" />
        <TextField id="orgWebsite" label="Organisation website" />
        <NumberField id="orgPhone" label="Organisation phone number" />
        <TextArea id="details" label="Please provide any additional information" />
      </Form>
    </ContainerMax>
  </Layout>
)}
