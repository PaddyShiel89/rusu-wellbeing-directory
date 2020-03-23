import React from "react"
import Layout from "../../layout/Layout"
import HubCard, { HubCardGroup } from "../../components/HubCard"
import { PageTitle } from "../../layout/Heading"
import { ContainerMax } from "../../layout/Grid"

export default () => (
  <Layout title="I Need Help Now">
    <ContainerMax style={{marginBottom: `3rem`}}>
      <PageTitle>I need help now</PageTitle>
      <p>
        This is an introduction. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam at sem fermentum, eleifend nisl vel, pulvinar
        metus. Sed dignissim hendrerit lectus, id blandit elit. Integer bibendum
        justo vitae volutpat facilisis. Mauris placerat turpis est, non aliquet
        libero elementum sit amet. Vestibulum congue commodo mauris. Nunc
        dignissim urna sit amet sapien elementum dignissim.
      </p>
    </ContainerMax>
    <ContainerMax>
      <HubCardGroup>
        <HubCard
          title="Emergency contacts"
          link="/i-need-help-now/emergency-contacts/"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel dolor nec dui iaculis congue. Suspendisse hendrerit commodo
            felis quis blandit. Nunc tempor augue a mattis aliquet.
          </p>
        </HubCard>
        <HubCard title="Security" link="/">
          <p>
            Phasellus congue id nisl sed aliquet. Vivamus faucibus, orci vel
            faucibus dictum, arcu lacus mattis odio, vitae sollicitudin risus
            lacus nec nisi. Aliquam hendrerit, odio quis condimentum luctus.
          </p>
        </HubCard>
        <HubCard title="I'm a victim of crime" link="/">
          <p>
            Integer id accumsan dolor. Duis metus augue, finibus sed vehicula
            in, aliquet eget lorem. Suspendisse posuere, velit sodales porta
            pellentesque, turpis nisi congue ligula.
          </p>
        </HubCard>
        <HubCard title="I'm feeling suicidal" link="/">
          <p>
            Nullam eu urna fringilla, euismod enim in, feugiat tellus. Ut
            pellentesque fermentum mi sit amet interdum. Nunc id maximus erat,
            id fermentum lectus.
          </p>
        </HubCard>
      </HubCardGroup>
    </ContainerMax>
  </Layout>
)
