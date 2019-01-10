/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { StaticQuery, Link, graphql } from 'gatsby'

const listItem = css`
  border: 1px solid #555;
`

const listLink = css`
  border-bottom: 0;
  display: inline-block;
  padding: 2em 1.5em;

  > h3 {
    margin-top: 0;
  }

  > p {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgba(57, 204, 204, 0.1);
  }
`

const List = ({ posts }) => (
  <React.Fragment>
    {posts.edges.map(({ node }, i) => (
      <div css={listItem} key={node.fields.slug}>
        <Link to={node.fields.slug} css={listLink}>
          <h3>{node.frontmatter.title}</h3>
          <span>{node.frontmatter.date}</span>
          <p>{node.frontmatter.description}</p>
        </Link>
      </div>
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
