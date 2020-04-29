import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../layout/Layout"
import { PageTitle } from "../layout/Heading"
import { ContainerMax } from "../layout/Grid"
import HubCard, { HubCardGroup } from "../components/HubCard"
import { compareOrder } from "../utils/graphql"
import { multiplyRem } from "../utils/maths"
import { spacing } from "../styles/styles"

export default () => (
  <StaticQuery
    query={query}
    render={data => {

      const hubs = []
      data.allContentfulHubPage.edges.map(({node}) => hubs.push(node))
      hubs.sort(compareOrder)

      return (
        <Layout>
          <ContainerMax style={{paddingBottom: multiplyRem(spacing.spacer, 2)}}>
            <PageTitle>RUSU Welfare Directory</PageTitle>
            <p>
              The RUSU Welfare Directory provides contact details for a variety of organisations and support within, and external to, the University of Reading.
            </p>
            <HubCardGroup>
              {hubs.map(hub => {
                return (
                  <HubCard
                    key={hub.id}
                    title={hub.title}
                    link={`/${hub.slug}`}
                    description={hub.shortDescription}
                    image={hub.image}
                  />
                )
              })}
            </HubCardGroup>
          </ContainerMax>
        </Layout>
      )
    }}
  />
)

const query = graphql`
  query HomeHubPages {
    allContentfulHubPage {
      edges {
        node {
          id
          order
          shortDescription
          slug
          title
          image {
            description
            fluid(maxWidth: 675, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
