/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import { StaticQuery, Link, graphql } from 'gatsby'

import Header from './header'
import GlobalStyles from './global-styles'

const mainSection = css`
  max-width: 40em;
  margin-left: auto;
  margin-right: auto;
  padding: 2em 1.5em;
`

const footer = css`
  border-top: 1px solid #555;
  margin-top: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  text-align: center;
`

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
    render={data => (
      <React.Fragment>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <section css={mainSection}>
          {children}
          <footer css={footer}>
            &copy; {new Date().getFullYear()} &bull;{' '}
            <Link to="/colophon">Colophon</Link>
          </footer>
        </section>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
