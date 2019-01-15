import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import PostList from './post-list'

const PostIndex = () => (
  <StaticQuery
    query={graphql`
      query ListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM Do YYYY")
                description
                title
              }
            }
          }
        }
      }
    `}
    render={data => <PostList posts={data.allMarkdownRemark} />}
  />
)

export default PostIndex
