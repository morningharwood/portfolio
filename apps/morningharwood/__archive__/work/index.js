// @flow
import React, {Fragment} from 'react';
import {styled, withStyle} from 'styletron-react';
import {Helmet} from 'react-helmet';
import {graphql, Link} from 'gatsby';

const RedAnchor = styled('a', {color: 'red'});
const FancyAnchor = withStyle(RedAnchor, {fontFamily: 'cursive'});

const WorkComponent = ({
                         data: {
                           allMarkdownRemark: {edges},
                           allArticle,
                         },
                       }) => {

  return (
    <Fragment>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <FancyAnchor>Work</FancyAnchor>
      {allArticle.edges.map(node => node.node.data).map((d, key) => {
        return (
          <div key={key}>
            <p>{d.articleName}</p>
          </div>
        )
      })}
      {edges.map(({node: {frontmatter}}) => {
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </div>
        );
      })}
    </Fragment>
  );
}

export const query = graphql`
  query WorkpageQuery {
    allMarkdownRemark(
      filter: {frontmatter: {root: {eq: "work"}}}
      sort: {order: ASC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            path
            root
          }
        }
      }
    }
    allArticle {
      edges {
        node {
          id
          data {
            meta {
              metaTitle
              metaDescription
            }
            theme
            articleName
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
  }
`;

export default WorkComponent;
