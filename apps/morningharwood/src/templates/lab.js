// @flow
import React from 'react';
import {graphql, Link} from 'gatsby';

const Template = ({data, pageContext}) => {
  // const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  const {next, prev} = pageContext;

  return (
    <div>
      <h1>Lab</h1>
      <div className="blogpost" dangerouslySetInnerHTML={{__html: html}} />
      {prev && <Link to={prev.frontmatter.path}>prev</Link>}
      {next && <Link to={next.frontmatter.path}>next</Link>}
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
