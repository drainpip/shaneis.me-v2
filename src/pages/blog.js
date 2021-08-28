import React from 'react'

import Layout from '../components/layout'
import PostIndex from '../components/post-index'
import TagsList from '../components/tags-list'
import SEO from '../components/seo'

const Blog = () => (
  <Layout>
    <SEO title="Blog Index" />
    <TagsList />
  </Layout>
)

export default Blog
