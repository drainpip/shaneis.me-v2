/** @jsx jsx */
// import PropTypes from 'prop-types'
import React from 'react'
import { graphql, Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const prevNextList = css`
  display: flex;
  list-style: none;
  margin-top: 2em;
  padding: 0;
  width: 100%;

  > li {
    flex: 1 0 0;
  }

  a {
    border-bottom: 0;
  }
`

const textRight = css`
  text-align: right;
`

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.description} />
      <h2>{post.frontmatter.title}</h2>
      <p css={textRight}>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <h4>Posts Like This</h4>
      <ul>
        {post.frontmatter.tags.map(tag => (
          <li key={tag}>
            <Link to={`/blog/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
      {(previous || next) && (
        <React.Fragment>
          <hr />
          <ul css={prevNextList}>
            {previous && (
              <li>
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  title={previous.frontmatter.title}
                >
                  ← previous
                </Link>
              </li>
            )}
            {next && (
              <li css={textRight}>
                <Link
                  to={next.fields.slug}
                  rel="next"
                  title={next.frontmatter.title}
                >
                  next →
                </Link>
              </li>
            )}
          </ul>
        </React.Fragment>
      )}
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        title
      }
    }
  }
`
