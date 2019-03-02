/** @jsx jsx */
// import PropTypes from 'prop-types'
import React from 'react'
import { graphql, Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import Layout from '../components/layout'
import PrevNext from '../components/prev-next'
import SEO from '../components/seo'

import BlogSeries from './blog-series'

const textRight = css`
  text-align: right;
`

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const series = data.allMarkdownRemark.edges
  const seriesData = series[0].node.frontmatter

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.description} />
      <article>
        <h2>{post.frontmatter.title}</h2>
        <p css={textRight}>{post.frontmatter.date}</p>
        {post.frontmatter.isSeries && (
          <React.Fragment>
            <p>{seriesData.seriesBlurb}</p>
            <BlogSeries
              currentPost={pageContext.slug}
              series={series}
              seriesData={seriesData}
            />
          </React.Fragment>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.frontmatter.isSeries && (
          <BlogSeries
            currentPost={pageContext.slug}
            series={series}
            seriesData={seriesData}
          />
        )}
        <h4>Posts Like This</h4>
        <ul>
          {post.frontmatter.tags.map(tag => (
            <li key={tag}>
              <Link to={`/blog/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
        {(previous || next) && <PrevNext previous={previous} next={next} />}
      </article>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $seriesSlug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        isSeries
        tags
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { seriesSlug: { eq: $seriesSlug } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            description
            seriesSlug
            seriesBlurb
            seriesEnded
          }
        }
      }
    }
  }
`
