import React from 'react'

import Layout from '../components/layout'
import PostList from '../components/post-list'
import SEO from '../components/seo'

const Blog = () => (
  <Layout>
    <SEO title="Blog Index" />
    <PostList />
  </Layout>
)

export default Blog
