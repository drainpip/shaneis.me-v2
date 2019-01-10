/** @jsx jsx */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

const header = css`
  background-color: #555;
  text-align: center;
`

const headerHeading = css`
  line-height: 1;
  margin-bottom: 0;
  padding-bottom: 0.15em;
  padding-top: 0.15em;
`

const headerLink = css`
  border-bottom: 5px solid #fff;
  color: #fff;
  text-decoration: none;
  &:visited {
    color: #fff;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`

const Header = ({ siteTitle }) => (
  <header css={header}>
    <h1 css={headerHeading}>
      <Link to="/" css={headerLink}>
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
