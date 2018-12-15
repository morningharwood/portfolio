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
  },
}) => (
  <Fragment>
    <Helmet>
      <title>Lab</title>
    </Helmet>
    <FancyAnchor>Lab</FancyAnchor>
    {edges.map(({node: {frontmatter}}) => {
      return (
        <div key={frontmatter.path}>
          <Link to={frontmatter.path}>{frontmatter.title}</Link>
        </div>
      );
    })}
  </Fragment>
);

export const query = graphql`
  query LabpageQuery {
    allMarkdownRemark(
      filter: {frontmatter: {root: {eq: "lab"}}}
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
  }
`;

export default WorkComponent;
