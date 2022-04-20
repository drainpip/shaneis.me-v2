/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';

const list = css`
  margin-bottom: 2em;
`;

const listHeading = css`
  border-bottom: 2px solid #555;

  @media screen and (prefers-color-scheme: dark) {
    border-bottom-color: #ededed;
  }
`;
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
`;

const PostList = ({ posts, heading }) => (
  <React.Fragment>
    <h2 css={listHeading}>{heading}</h2>
    <div css={list}>
      {posts.edges.map(({ node }) => (
        <Link to={node.fields.slug} css={listLink} key={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <span>{node.frontmatter.date}</span>
          <p>{node.frontmatter.description}</p>
        </Link>
      ))}
    </div>
  </React.Fragment>
);

PostList.defaultProps = {
  heading: `Latest Posts`,
};

PostList.propTypes = {
  heading: PropTypes.string,
  posts: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
          frontmatter: PropTypes.shape({
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          }),
        }),
      }).isRequired,
    ),
  }),
};

export default PostList;
