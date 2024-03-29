module.exports = {
  siteMetadata: {
    author: `@drainpip`,
    description: `I'm an old-school geek that likes to write on an irregular schedule. I've been a developer for over 20 years and now I have been exploring what it means to be a good manager of developers. So I write irregularly about that and maybe other things.`,
    siteUrl: `https://shaneis.me`,
    title: `Shane is me`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date
        description
        title
      }
      html
      fields {
        slug
      }
      excerpt
    }
  }
}`,
            output: "rss.xml",
            title: "Shane is me blog",
          },
        ],
      },
    },
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
