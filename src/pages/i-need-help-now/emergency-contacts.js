import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../../layout/Layout"
import { PageTitle } from "../../layout/Heading"
import { ContainerMax } from "../../layout/Grid"

import DirectoryContact from "../../components/DirectoryContact"

export default () => (
  <StaticQuery
    query={query}
    render={data => {
      return (
        <Layout title="Emergency Contacts">
          <ContainerMax>
            <PageTitle>Emergency Contacts</PageTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vel dolor nec dui iaculis congue. Suspendisse hendrerit commodo
              felis quis blandit. Nunc tempor augue a mattis aliquet.
            </p>
          </ContainerMax>
          <section>
            {console.log(data.allContentfulContact)}
            {data.allContentfulContact.edges.map(({node}) => (
              <DirectoryContact
                key={node.id}
                title={node.title}
                description={node.description.description}
                phone1={node.phoneNumber1}
                phone1Title={node.phoneNumber1Title}
                phone1Description={node.phoneNumber1Description}
                phone2={node.phoneNumber2}
                phone2Title={node.phoneNumber2Title}
                phone2Description={node.phoneNumber2Description}
                phone3={node.phoneNumber3}
                phone3Title={node.phoneNumber3Title}
                phone3Description={node.phoneNumber3Description}
                website={node.website}
              />
            ))}
            {console.log(data.allContentfulContact.edges)}
          </section>
        </Layout>
      )
    }}
  />
)

const query = graphql`
  query MyQuery {
    allContentfulContact {
      edges {
        node {
          id
          title
          description {
            description
          }
          phoneNumber1
          phoneNumber1Title
          phoneNumber1Description
          phoneNumber2
          phoneNumber2Title
          website
        }
      }
    }
  }
`
