// @flow
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'this is my blog',
  },
  plugins: [
    // `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-flow`,
    `gatsby-plugin-canner-schema`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        ['component']: path.join(__dirname, 'src/components'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-styletron',
      options: {
        // You can pass options to Styletron.
        prefix: '_',
      },
    },
  ],
};
