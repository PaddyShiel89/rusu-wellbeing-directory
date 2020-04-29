import React from "react"

import Layout from "../layout/Layout"
import { PageTitle } from "../layout/Heading"
import { ContainerMax } from "../layout/Grid"
import HubCard, { HubCardGroup } from "../components/HubCard"
import { compareOrder } from "../utils/graphql"
import { spacing } from "../styles/styles"
import { multiplyRem } from "../utils/maths"

export default ({ pageContext }) => {
  const { description, directories, metaData, slug, title } = pageContext

  const DirectoryList = () => {
    directories.sort(compareOrder)
    const mappedDirectories = directories.map(directory => (
      <HubCard
        key={directory.id}
        title={directory.title}
        description={directory.shortDescription}
        link={`${slug}/${directory.slug}`}
      />
    ))
    return <HubCardGroup>{mappedDirectories}</HubCardGroup>
  }

  const availableList =
    directories !== null ? (
      <DirectoryList />
    ) : (
      `There are currently no directories in this hub. Check back soon for
        information.`
    )

  return (
    <Layout {...metaData} >
      <ContainerMax style={{paddingBottom: multiplyRem(spacing.spacer, 2)}}>
        <PageTitle>{title}</PageTitle>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </ContainerMax>
      <ContainerMax style={{paddingBottom: multiplyRem(spacing.spacer, 2)}}>
        <section>{availableList}</section>
      </ContainerMax>
    </Layout>
  )
}
