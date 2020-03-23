import React from "react"

import Layout from "../layout/Layout"
import { PageTitle } from "../layout/Heading"
import { ContainerMax } from "../layout/Grid"
import HubCard, { HubCardGroup } from "../components/HubCard"

export default () => (
  <Layout>
    <ContainerMax>
      <PageTitle>Hello world</PageTitle>
      <p>Welcome to the RUSU Wellbeing Directory. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel dolor nec dui iaculis congue.</p>
      <HubCardGroup>
      <HubCard
          title="I Need Help Now"
          link="/i-need-help-now/"
          img="https://picsum.photos/675/380"
          alt="Alt text"
          >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel dolor nec dui iaculis congue. Suspendisse hendrerit commodo
            felis quis blandit. Nunc tempor augue a mattis aliquet.
          </p>
        </HubCard>
        <HubCard
          title="I'm Worried About..."
          link="/im-worried-about/"
          img="https://picsum.photos/675/380"
          alt="Alt text"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel dolor nec dui iaculis congue. Suspendisse hendrerit commodo
            felis quis blandit. Nunc tempor augue a mattis aliquet.
          </p>
        </HubCard>
        <HubCard
          title="I Need Advice On..."
          link="/i-need-advice-on/"
          img="https://picsum.photos/675/380"
          alt="Alt text"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel dolor nec dui iaculis congue. Suspendisse hendrerit commodo
            felis quis blandit. Nunc tempor augue a mattis aliquet.
          </p>
        </HubCard>
        <HubCard
          title="Mental Health Support"
          link="/mental-health-support/"
          img="https://picsum.photos/675/380"
          alt="Alt text"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel dolor nec dui iaculis congue. Suspendisse hendrerit commodo
            felis quis blandit. Nunc tempor augue a mattis aliquet.
          </p>
        </HubCard>
      </HubCardGroup>
    </ContainerMax>
  </Layout>
)
