/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  seriesSlug
                  title
                  tags
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        const blogTemplate = path.resolve('./src/templates/blog-post.js')
        const tagTemplate = path.resolve('./src/templates/tags.js')
        let tags = []

        posts.forEach(({ node }, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          if (node.frontmatter.tags.length) {
            node.frontmatter.tags.forEach(tag => {
              if (tags.indexOf(tag) === -1) tags.push(tag)
            })
          }

          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              seriesSlug: node.frontmatter.seriesSlug,
              slug: node.fields.slug,
              previous,
              next,
            }, // additional data can be passed via context
          })
        })

        tags.forEach(tag => {
          createPage({
            path: `/blog/${tag}`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })

        return
      })
    )
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
