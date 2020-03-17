import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, imageAlt, imageTwitter, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultDescription,
          defaultImage,
          defaultImageAlt,
          defaultImageTwitter,
          defaultTitle,
          facebookAppID,
          locale,
          siteUrl,
          titleTemplate,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        imageAlt: `${imageAlt || defaultImageAlt}`,
        imageTwitter: `${siteUrl}${imageTwitter || defaultImageTwitter}`,
        url: `${siteUrl}${pathname || "/"}`,
      }

      const formatTitleTemplate = seo.title === defaultTitle ? seo.title : titleTemplate

      return (
        <>
          <Helmet title={seo.title} titleTemplate={formatTitleTemplate}>
            <link rel="stylesheet" href="https://use.typekit.net/jst8qrt.css" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            {article ? <meta property="og:type" content="article" /> : <meta property="og:type" content="website" /> }
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:image:alt" content={seo.imageAlt} />
            <meta property="og:locale" content={locale} />
            <meta property="fb:app_id" content={facebookAppID} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.imageTwitter} />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  article: PropTypes.bool,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imageTwitter: PropTypes.string,
  pathname: PropTypes.string,
  title: PropTypes.string,
}

SEO.defaultProps = {
  article: false,
  description: null,
  image: null,
  imageAlt: null,
  imageTwitter: null,
  pathname: null,
  title: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultDescription: description
        defaultImage: imageDefault
        defaultImageAlt: imageAlt
        defaultImageTwitter: imageTwitter
        defaultTitle: title
        facebookAppID
        locale
        siteUrl: url
        titleTemplate
        twitterUsername
      }
    }
  }
`
