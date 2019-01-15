/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { StaticQuery, Link, graphql } from 'gatsby'

const listHeading = css`
  border-bottom: 2px solid #555;
`
const listLink = css`
  border: 1px solid;
  display: inline-block;
  padding: 2em 1.5em;
  width: 100%;

  > h3 {
    margin-top: 0;
  }

  > p {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgba(57, 204, 204, 0.1);
  }

  & + & {
    margin-top: 2em;
  }
`

const List = ({ posts }) => (
  <React.Fragment>
    <h2 css={listHeading}>Latest Posts</h2>
    {posts.edges.map(({ node }) => (
      <Link to={node.fields.slug} css={listLink} key={node.fields.slug}>
        <h3>{node.frontmatter.title}</h3>
        <span>{node.frontmatter.date}</span>
        <p>{node.frontmatter.description}</p>
      </Link>
    ))}
  </React.Fragment>
)

const PostList = () => (
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
    render={data => <List posts={data.allMarkdownRemark} />}
  />
)

export default PostList
