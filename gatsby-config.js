/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    author: `Patrick Shiel`,
    description: `Reading University Students' Union's Welfare Directory offers important contact information for a range of student needs and issues.`,
    facebookAppID: process.env.FACEBOOK_APP_ID,
    homepageLink: `/`,
    locale: `en_GB`,
    siteUrl: `https://www.rusuwelfaredirectory.co.uk`,
    menuLinks: [
      {
        name: `I Need Help Now`,
        link: `/i-need-help-now`
      },
      {
        name: `I'm Worried About...`,
        link: `/im-worried-about`
      },
      {
        name: `I Need Advice On...`,
        link: `/i-need-advice-on`
      },
      {
        name: `Mental Health Support`,
        link: `/mental-health-support`
      },
    ],
    title: `RUSU Welfare Directory`,
    titleTemplate: `%s | RUSU Welfare Directory`,
    twitterUsername: `@RUSUtweets`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-styled-components-dark-mode`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RUSU Welfare Directory`,
        short_name: `RUSU Welfare`,
        description: `Reading University Students' Union's Welfare Directory offers important contact information for a range of student needs and issues.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ea5616`,
        theme_color: `#f8f9fa`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/logo-favicon.png`,
        icons: [
          {
            src: `static/logo-favicon-lg.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
          cookieName: 'google-analytics',
          anonymize: true,
        },
        // googleTagManager: {
        //   trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID',
        //   cookieName: 'gatsby-gdpr-google-tagmanager',
        //   dataLayerName: 'dataLayer',
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID',
        //   cookieName: 'gatsby-gdpr-facebook-pixel',
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production']
      },
    },
  ],
}
