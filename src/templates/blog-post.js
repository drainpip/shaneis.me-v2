/** @jsx jsx */
// import PropTypes from 'prop-types'
import React from 'react';
import { graphql, Link } from 'gatsby';
import { css, jsx } from '@emotion/react';

import Layout from '../components/layout';
import PrevNext from '../components/prev-next';
import Seo from '../components/seo';

import BlogSeries from './blog-series';

const blogDate = css`
  text-align: right;

  @media (min-width: 40em) {
    text-align: center;
  }
`;

const blogSection = css`
  @media (min-width: 40em) {
    h2,
    h3 {
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -40vw;
      margin-right: -40vw;
      width: 80vw;
      text-align: center;
    }
  }
`

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const series = data.allMarkdownRemark.edges;
  const seriesData = series[0].node.frontmatter;

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <section css={blogSection}>
        <h2>{post.frontmatter.title}</h2>
        <p css={blogDate}>{post.frontmatter.date}</p>
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
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
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
      </section>
    </Layout>
  );
};

export default BlogPost;

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
`;
