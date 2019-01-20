// @flow
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'this is my blog',
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-flow`,
    {
      resolve: 'gatsby-plugin-styletron',
      options: {
        // You can pass options to Styletron.
        prefix: '_',
      },
    },
    {
      resolve: 'gatsby-source-firestore-live',
      options: {
        credential: require('../../cert.json'),
        types: [
          {
            type: 'Articles',
            collection: 'articles',
            map: doc => ({
              data: doc
            }),
          },
          {
            type: 'Outlets',
            collection: 'outlets',
            map: doc => ({
              data: doc
            }),
          },
          {
            type: 'Routes',
            collection: 'routes',
            map: doc => ({
              data: doc
            }),
          }
        ],
      },
    },
  ],
};
