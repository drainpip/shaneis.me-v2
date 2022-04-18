/** @jsx jsx */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/react';

const header = css`
  background-color: #555;
  text-align: center;

  @media screen and (prefers-color-scheme: dark) {
    background-color: #999;
  }
`;

const headerHeading = css`
  line-height: 1;
  margin-bottom: 0;
  padding-bottom: 0.15em;
  padding-top: 0.15em;
`;

const headerLink = css`
  color: #fff;
  border-bottom: 5px solid;
  text-decoration: none;
  &:visited {
    color: #fff;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (prefers-color-scheme: dark) {
    color: #333;
    &:visited {
      color: #333;
    }
    &:hover {
      color: rgba(51, 51, 51, 0.8);
    }
  }
`;

const Header = ({ siteTitle }) => (
  <header css={header}>
    <h1 css={headerHeading}>
      <Link to="/" css={headerLink}>
        {siteTitle}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
