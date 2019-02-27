---
title: 'Implementation Details: Part Two'
description: 'Getting a blog working in Gatsby'
date: '2019-02-27'
image: ''
isSeries: true
seriesSlug: 'implementation-details'
tags: ['code', 'meta']
---

#### Assumptions:

- You have read Implementation Details: Part One
- You’ve worked with data from an API of some kind

#### Part Two Goals:

- Get a decent start on GraphQL
- Set up a blog template / back end
- Write our first post!

#### What’s up with GraphQL in Gatsby?

Thousands of articles, blog posts, tech talks, Twitter threads, and every other conceivable type of content have been shared about GraphQL. The benefits of this technology to big, complicated, applications is pretty obvious. Why is it needed for our tiny little blog?

The queries that we are going to write should feel comfortable to you — basically just give it a JavaScript object and you’ll get the data you want in the shape that you want it. Gatsby includes a graphical interface that we can test the queries with, so you’ll know before you put it in the code if you’re getting what you want.

The wonderful thing Gatsby does for us is hide all the complicated bits away. They’ll let you dig into them if you want, but that’s not our goal here. Essentially when you ask Gatsby to create a page, it’s going to do so with the data you requested. Once inside that page, you can do whatever you want with the data inside React. Because it’s all GraphQL, you’re in full control of how that data is filtered, ordered, etc., all by changing a JavaScript object.

#### Quick GraphQL tutorial

Gatsby comes with a nice GUI for manipulating and testing your queries. When the development server is up and running, you can find it at [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql). Clear away the query on the left panel if there is one and copy this in:

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```graphql
{
  site {
    siteMetadata {
      title
    }
  }
}
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

To run the query you may press `Ctrl + Enter`, or the “play” button at the top of the screen, and you’ll get the data on the right.

If you return to the query, I’ll teach you a tool that I use to make new queries quickly. Add a new line under `title` and press `Ctrl + Space` to bring up the auto-complete dialogue. You can type, or select, `siteUrl`. Run the query and you’ll get the new field right away.

If you always use the auto-complete dialogue you’ll never get into trouble asking for data that doesn’t exist. Feel free to play around with the site-level data, or find something else that’s in the root of the database. Experiment and explore all you want, you can’t hurt anything in here!

This is pulling data from `./gatsby-config.js` and the data is being populated into GraphQL behind the scenes. So how do we add data to the system ourselves?

#### Setting things up

We’re going to get a bunch of stuff going here all at the same time. First let’s set up a couple dummy blog posts so we can see it alive in GraphQL.

I decided, after reading a few other tutorials, that I wanted to keep things that weren’t code in a separate place. This means all my blog posts and images, etc., will live away from the bits that make the site work. So I’m going to use the `./content/` folder in the project root to store everything. This makes sure all my content doesn’t interfere with the build system, or make it so I have to build around it.

Make two new files:

`./content/blog/hello-world/index.md`

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```md
---
title: 'Hello World'
description: 'This is only a test!'
date: '2019-01-01'
---

Hello world!
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

`./content/blog/again-with-the-testing/index.md`

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```md
---
title: 'Again With The Testing'
description: 'This is only another test!'
date: '2019-01-02'
---

Testing my tests!
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

Quick note: the `title`, `description`, and `date` are considered “frontmatter”. You can put lots of stuff in there so you can have access to it in the database - we’ll get into that in a later chapter!

We now need to add the ability for Gatsby to parse markdown and compile it to HTML. In your console type/copy `yarn add gatsby-transformer-remark` [docs](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/). We’ll then need to add it to the plugins so Gatsby knows to use it.

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```js
// ./gatsby-config.js

// Find the plugins array
plugins: [
  `gatsby-transformer-remark`
  /* ... */
]
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

Once that’s saved, let’s restart the `gatsby develop` process, and back into the [GraphQL GUI](http://localhost:8000/___graphql). Let’s start by playing around with the data inside `allMarkdownRemark`.

Example query (remember, if you’re stuck, use `Ctrl + Space` to bring up your query options):

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```graphql
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
      }
    }
  }
}
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

This will show you the titles and date of each post! Feel free to play around with all the data that you now have available.

What we need to do now is take this data and tell Gatsby that we want to build a new page for each one of those blog posts. This means we need a new template, and we need to mess with `gatsby-node.js`. I’m going to share exactly what I did at this phase, but I’m giving you some homework to read some docs.

- [Gatsby Node API](https://www.gatsbyjs.org/docs/node-apis/) - We’ll use this to create pages based on GraphQL data, and pass it down to React.
- [Gatsby Actions](https://www.gatsbyjs.org/docs/actions/) - Actual actions used to create pages and create data fields.
- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/) - We’ll use this to create slugs.

Let’s great a new template:

`./src/templates/blog-post.js`

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```jsx
import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

Note: There are some assumptions in this code that you still have `<Layout />` and `<SEO />` hanging around. If not, feel free to delete that part.

Let’s go into `gatsby-node.js`, create the pages, and use this new template!

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```js
// path is used to find files
const path = require('path')
// createFilePath will be used to set up slugs
const { createFilePath } = require(`gatsby-source-filesystem`)

// This will loop through all the markdown and create HTML files
exports.createPages = ({ actions, graphql }) => {
  // https://www.gatsbyjs.org/docs/actions/#createPage
  const { createPage } = actions
  // The GraphQL here also includes a `sort` to make sure things are ordered by date
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then(result => {
        // Kick out if there are errors
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        // The template we just created!
        const blogTemplate = path.resolve('./src/components/blog-post.js')
        // Loop through each of the markdown files and create a page
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              slug: node.fields.slug,
            }, // additional data can be passed via context
          })
        })
        return
      })
    )
  })
}

// This will attach the slug in the props being passed into the template
exports.onCreateNode = ({ node, getNode, actions }) => {
  // https://www.gatsbyjs.org/docs/actions/#createNodeField
  const { createNodeField } = actions
  // If this file is markdown, add the slug to the props
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

Note: Any time you make changes to Gatsby’s config you’ll need to restart `gatsby develop` to see the results.

When the site is up and running, you’ll be able to go to [localhost:8000/hello-world/](http://localhost:8000/hello-world/) and see your first blog post in action!

All you need to do to get a new blog post up and running is add a new folder with `index.md` inside. Follow the “frontmatter” format, and you’ll be off to the races. In the next installment, we will get all the tiny details in place that make a modern blog easier to read — see you there!
