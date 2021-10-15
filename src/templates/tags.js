import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import PostList from '../components/post-list';
import Seo from '../components/seo';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const tagInfo = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <Layout>
      <Seo title={tag} description={tagInfo} />
      <PostList heading={tag} posts={data.allMarkdownRemark} />
      <Link to="/blog">&larr; Blog Index</Link>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
`;
