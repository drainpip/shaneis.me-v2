import React from 'react'

import Layout from '../components/layout'
import PostIndex from '../components/post-index'
import SEO from '../components/seo'

const Blog = () => (
  <Layout>
    <SEO title="Blog Index" />
    <PostIndex />
  </Layout>
)

export default Blog
