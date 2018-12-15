// @flow
const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise(resolve => {
    resolve(
      graphql(`
        query {
          allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___date]}) {
            edges {
              node {
                frontmatter {
                  path
                  root
                }
              }
            }
          }
        }
      `).then(result => {
        const partition = result.data.allMarkdownRemark.edges
          .map(({node}) => node)
          .reduce((acc, val) => {
            const root = val.frontmatter.root;
            const accHasntRootProp = !acc.hasOwnProperty(root);
            const setAccModel = () => {
              acc[root] = {};
              acc[root].nodes = [];
              acc[root].template = path.resolve(`./src/templates/${root}.js`);
            };
            const updateRootWithVal = () => acc[root].nodes.push(val);
            accHasntRootProp ? setAccModel() : null;
            updateRootWithVal();
            return acc;
          }, {});
        Object.entries(partition).forEach(([key, value]) => {
          value.nodes.forEach((node, index) => {
            const path = node.frontmatter.path;
            const isFirst = index === 0;
            const isLast = index === value.nodes.length - 1;
            createPage({
              path,
              component: value.template,
              context: {
                pathSlug: path,
                prev: isFirst ? null : value.nodes[index - 1],
                next: isLast ? null : value.nodes[index + 1],
              },
            });
            resolve();
          });
        });
      })
    );
  });
};
