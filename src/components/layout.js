/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import GlobalStyles from './global-styles';

const contentWidth = css`
  max-width: 40em;
  margin-left: auto;
  margin-right: auto;
`;

const main = [
  contentWidth,
  css`
    padding: 2em 1.5em;
  `,
];

const footer = [
  contentWidth,
  css`
    margin-top: 4em;
    margin-bottom: 2em;
    text-align: center;
  `,
];

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <React.Fragment>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main css={main}>{children}</main>
        <footer css={footer}>Made in California.</footer>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
