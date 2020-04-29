/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const HubPageTemplate = path.resolve("./src/templates/Hub.js")
  const DirectoryPageTemplate = path.resolve("./src/templates/Directory.js")

  const result = await graphql(`
  {
    allContentfulHubPage {
      edges {
        node {
          id
          slug
          shortDescription
          title
          directory {
            id
            order
            shortDescription
            slug
            title
          }
          image {
            description
            standard: fixed(width: 1200, height: 630, quality: 100) {
              src
            }
            twitter: fixed(width: 1200, height: 600, quality: 100) {
              src
            }
          }
          longDescription {
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
      }
    }
    allContentfulDirectory {
      edges {
        node {
          id
          slug
          shortDescription
          title
          updatedAt
          additional_link {
            id
            link
            order
            title
          }
          contact {
            email
            id
            order
            phoneNumber1
            phoneNumber1Description
            phoneNumber1Title
            phoneNumber2
            phoneNumber2Title
            phoneNumber2Description
            phoneNumber3
            phoneNumber3Title
            smsNumber1
            smsNumber1Description
            smsNumber1Title
            title
            updatedAt
            website
            websiteDescription
            websiteTitle
            description {
              childMarkdownRemark {
                html
              }
            }
          }
          hubPage {
            slug
            image {
              description
              standard: fixed(width: 1200, height: 630, quality: 100) {
                src
              }
              twitter: fixed(width: 1200, height: 600, quality: 100) {
                src
              }
            }
          }
          longDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const HubPages = result.data.allContentfulHubPage.edges
  HubPages.forEach(({ node }) => {
    const pagePath = `/${node.slug}`
    createPage({
      path: pagePath,
      component: HubPageTemplate,
      context: {
        description: node.longDescription.childMarkdownRemark.html,
        directories: node.directory,
        slug: pagePath,
        title: node.title,
        metaData: {
          title: node.title,
          description: node.shortDescription,
          image: node.image === null ? null : node.image.standard.src,
          imageAlt: node.image === null ? null : node.image.description,
          imageTwitter: node.image === null ? null : node.image.twitter.src,
          pathname: pagePath,
          article: false,
        }
      }
    })
  })

  const DirectoryPages = result.data.allContentfulDirectory.edges
  DirectoryPages.forEach(({ node }) => {
    const pagePath = `/${node.hubPage.slug}/${node.slug}`
    createPage({
      path: pagePath,
      component: DirectoryPageTemplate,
      context: {
        additional: node.additional_link,
        contacts: node.contact,
        description: node.longDescription.childMarkdownRemark.html,
        title: node.title,
        updated: node.updatedAt,
        metaData: {
          title: node.title,
          description: node.shortDescription,
          image: node.hubPage.image === null ? null : node.hubPage.image.standard.src,
          imageAlt: node.hubPage.image === null ? null : node.hubPage.image.description,
          imageTwitter: node.hubPage.image === null ? null : node.hubPage.image.twitter.src,
          pathname: pagePath,
          article: false,
        }
      },
    })
  })
}
