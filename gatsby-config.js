/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    author: `Patrick Shiel`,
    description: `Reading University Students' Union's Wellbeing Directory offers important contact information for a rage of student needs and issues.`,
    facebookAppID: 12345678,
    homepageLink: `/`,
    imageDefault: `/websiteShareImage.jpg`,
    imageTwitter: `/websiteTwitterImage.jpg`,
    imageAlt: `The Reading University Students' Union Wellbeing Directory`,
    locale: `en_GB`,
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
    socialLinks: [
      {
        name: `Facebook`,
        link: `https://www.facebook.com`,
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com`,
      },
      {
        name: `Instagram`,
        link: `https://www.instagram.com`,
      },
    ],
    title: `Wellbeing Directory`,
    titleTemplate: `%s | Website title`,
    twitterUsername: `@twitterusername`,
    url: `https://www.websitetitle.co.uk`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-styled-components-dark-mode`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RUSU Welfare Directory`,
        short_name: `RUSU Welfare`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
