import React from "react"

import Layout from "../layout/Layout"
import { PageTitle } from "../layout/Heading"
import { ContainerMax } from "../layout/Grid"
import { ButtonPrimary } from "../components/Buttons"

export default () => (
  <Layout title="Page not found">
    <ContainerMax>
      <PageTitle>404: Page not found</PageTitle>
      <p>We couldn't find the page you were looking for.</p>
      <ButtonPrimary to={"/"}>Return to the homepage</ButtonPrimary>
    </ContainerMax>
  </Layout>
)
