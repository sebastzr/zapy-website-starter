/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: process.env.GATSBY_SITE_TITLE,
    titleTemplate: process.env.GATSBY_SITE_TITLE_TEMPLATE,
    description: process.env.GATSBY_SITE_DESCRIPTION,
    url: process.env.GATSBY_SITE_URL,
    image: `/${process.env.GATSBY_SITE_LOGO}`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.GATSBY_SITE_TITLE,
        short_name: process.env.GATSBY_SITE_SHORT_TITLE,
        description: process.env.GATSBY_SITE_DESCRIPTION,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: process.env.GATSBY_SITE_THEME_COLOR,
        display: `standalone`,
        icon: `static/${process.env.GATSBY_SITE_LOGO}`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GOOGLE_ANALYTICS_ID, // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    `gatsby-plugin-smoothscroll`,
  ],
}
