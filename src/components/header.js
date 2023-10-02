/** @jsx jsx */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/react';

const header = css`
  max-width: 40em;
  margin-bottom: 1em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  margin-top: 1em;

  @media (min-width: 40em) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const headerHeading = css`
  background-color: #555;
  box-shadow: 0.5rem 0.5rem #222;
  line-height: 1;
  margin-bottom: 0;

  @media screen and (prefers-color-scheme: dark) {
    background-color: #999;
    box-shadow-color: #000;
  }
`;

const headerLink = css`
  color: #fff;
  display: block;
  padding: 0.15em 0.25em;
  text-decoration: none;
  &:visited {
    color: #fff;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.2);
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

const blinkingCursor = css`
  position: relative;
  top: -0.1em;

  @keyframes cursor-blink { 
    0% {
      opacity: 0;
    }
  }
  animation: cursor-blink 1.5s steps(2) infinite;
`

const Header = ({ siteTitle }) => (
  <header css={header}>
    <h1 css={headerHeading}>
      <Link to="/" css={headerLink}>
        {siteTitle}<span css={blinkingCursor}>|</span>
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
