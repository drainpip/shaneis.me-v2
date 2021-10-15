/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';

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
    text-decoration: none;
  }
`;

const textRight = css`
  text-align: right;
`;

const PrevNext = ({ previous, next }) => (
  <React.Fragment>
    <hr />
    <ul css={prevNextList}>
      {previous && (
        <li>
          <Link to={previous.fields.slug} rel="prev" title="Previous Post">
            ←&nbsp;{previous.frontmatter.title}
          </Link>
        </li>
      )}
      {next && (
        <li css={textRight}>
          <Link to={next.fields.slug} rel="next" title="Next Post">
            {next.frontmatter.title}&nbsp;→
          </Link>
        </li>
      )}
    </ul>
  </React.Fragment>
);

export default PrevNext;
