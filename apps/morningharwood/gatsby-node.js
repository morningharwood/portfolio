// @flow
const path = require('path');
const kebabCase = require('lodash.kebabcase');
const get = require('lodash.get');

const allFirestoreQueries = `
query {
  allRoutes {
    edges {
      node {
        id
        data {
          routePath
          name
        }
      }
    }  
  }
  allArticles {
    edges {
      node {
        data {
          meta {
            metaTitle
            metaDescription
          }
          theme
          articleName
          route
          sections {
            theme
            sectionName
            elements {
              element
              data {
                dateTo
                dateFrom
                headerTitle
                headerDesc
              }
            }
          }
        }
      }
    }
  }
}`;

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const {data: {allArticles, allRoutes}} = await graphql(allFirestoreQueries);

  const parentRoutes = allRoutes.edges.map(({node}) => {
    createPage({
      path: node.data.routePath,
      component: path.resolve(`./src/templates/${node.data.name}.js`),
      context: {
        data: {
          routes: node.data,
          articles:  allArticles.edges.filter(({node : articleNode}) => node.id === articleNode.data.route),
          // outlets: allOutlets.edges.filter(({node: outletNode}) => node.id === outletNode.data.route),
        },
        // prev: isFirst ? null : value.nodes[index - 1],
        // next: isLast ? null : value.nodes[index + 1],
      },
    });
    return node;
  });

  const articleRoutes = allArticles.edges.map(({node}) => {
    const parentRoute = parentRoutes.find(({id}) => id === node.data.route);
    const templatePath =
      path.join('./src/templates/', `${get(parentRoute, 'data.name', 'work')}-article.js`);

    createPage({
      path: path.join(get(parentRoute, 'data.routePath'), kebabCase(node.data.articleName)),
      component: path.resolve(templatePath),
      context: {
        data: node.data,
      },
    });

    return node;
  });

  return await allArticles;
};