import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PostList from './post-list';

const PostIndex = () => (
  <StaticQuery
    query={graphql`
      query ListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM Do YYYY")
                description
                tags
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <React.Fragment>
        <PostList posts={allMarkdownRemark} />
      </React.Fragment>
    )}
  />
);

export default PostIndex;
