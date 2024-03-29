import { Global, css } from '@emotion/react';
import React from 'react';

const globalCSS = css`
  html {
    box-sizing: border-box;
    font-size: 90%;
    @media (min-width: 40em) {
      font-size: 95%;
    }
    @media (min-width: 75em) {
      font-size: 100%;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: #555;
    font-family: georgia, serif;
    line-height: 1.7;
    margin: 0;
  }

  p,
  h1,
  h2,
  h3,
  ol,
  ul {
    margin-top: 0;
  }

  p,
  li {
    font-size: 1.15rem;
  }

  p {
    margin-bottom: 2em;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 2.5em;
    @media (min-width: 40em) {
      font-size: 4.5em;
    }
  }

  h2 {
    font-size: 2em;
    @media (min-width: 40em) {
      font-size: 3.5em;
    }
  }

  h3 {
    font-size: 1.75em;
    @media (min-width: 40em) {
      font-size: 2.5em;
    }
  }

  h4 {
    font-size: 1.25em;
    @media (min-width: 40em) {
      font-size: 1.75em;
    }
  }

  a {
    color: #0074d9;
    text-decoration-skip: edges;

    &:visited {
      color: #b10dc9;
    }
    &:hover {
      color: #39cccc;
    }
  }

  ol,
  ul {
    margin-bottom: 2em;
  }

  li > ul {
    margin-top: -1em;
    margin-bottom: 1em;
  }

  /* Override for prismjs line numbers styles */
  .line-numbers .line-numbers-rows {
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 0.8em;
  }

  /* Override for prismjs inline code styles */
  :not(pre) > code.language-text {
    background-color: #555;
    border-radius: 0;
    color: #fff;
    padding: 0.1em 0.2em;
  }

  /* Add bottom margin to this for spacing under the code highlighted <pre/> */
  .gatsby-highlight {
    margin-bottom: 2em;
  }

  /* Override underline for auto-anchor headings */
  a.anchor {
    border-bottom: 0;
  }

  @media screen and (prefers-color-scheme: dark) {
    body {
      background-color: #333;
      color: #ededed;
    }

    h1,
    h2,
    h3,
    h4 {
      color: white;
    }

    a {
      color: #90e0ef;
      &:visited {
        color: #00b4d8;
      }
    }
  }
`;

const GlobalStyles = () => <Global styles={globalCSS} />;

export default GlobalStyles;
