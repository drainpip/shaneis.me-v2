module.exports = {
  siteMetadata: {
    author: `@drainpip`,
    description: `A site about things.`,
    siteUrl: `https://shaneis.me`,
    title: `Shane is me`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shane is me`,
        short_name: `shaneis.me`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#555`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
