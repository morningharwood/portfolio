// @flow
import React, {Fragment} from 'react';
import {styled, withStyle} from 'styletron-react';
import {Helmet} from 'react-helmet';
import {graphql, Link} from 'gatsby';

const RedAnchor = styled('a', {color: 'red'});
const FancyAnchor = withStyle(RedAnchor, {fontFamily: 'cursive'});

const MainComponent = ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => (
  <Fragment>
    <Helmet>
      <title>Morning Harwood</title>
    </Helmet>
    <FancyAnchor>MorningHarwood</FancyAnchor>
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
  query HomepageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default MainComponent;
