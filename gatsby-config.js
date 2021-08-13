/* eslint-disable node/no-path-concat */
const dotenv = require(`dotenv`);

dotenv.config({ path: `.env` });

module.exports = {
  siteMetadata: {
    title: `PartMonger Inventory`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PartMonger Inventory`,
        short_name: `Part Inventory`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#031d42`,
        display: `standalone`,
        icon: `src/assets/favicons/mstile-310x310.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/svgs`,
        name: `svgs`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
        forceBase64Format: `webp`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/*.{js,jpg,png,html,css}`],
          maximumFileSizeToCacheInBytes: 10905190,
        },
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
};
