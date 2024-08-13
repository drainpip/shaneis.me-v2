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
  background-color: #555;
  box-shadow: 0.5rem 0.5rem #222;
  color: #fff;
  &:visited {
    color: #fff;
  }
  display: inline-block;
  padding: 2em 1.5em;
  position: relative;
  text-decoration: none;
  width: 100%;

  @media screen and (prefers-color-scheme: dark) {
    background-color: #999;
    box-shadow-color: #000;
    color: #444;
    &:visited,
    &:hover {
      color: #444;
    }
  }

  > h3 {
    margin-top: 0;
    color: #fff;

    @media screen and (prefers-color-scheme: dark) {
      color: #333;
    }
  }

  > p {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    
    @media screen and (prefers-color-scheme: dark) {
      background-color: rgba(256, 256, 256, 0.8);
    }
  }

  & + & {
    margin-top: 2em;
  }
`;
const date = css`
  position: absolute;
  top: 2px;
  right: 6px;
`;

const PostList = ({ posts, heading }) => (
  <React.Fragment>
    <h2 css={listHeading}>{heading}</h2>
    <div css={list}>
      {posts.edges.map(({ node }) => (
        <Link to={node.fields.slug} css={listLink} key={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <span css={date}>{node.frontmatter.date}</span>
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
