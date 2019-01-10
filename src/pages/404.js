import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>404</h2>
    <p>I will someday make this view more helpful.</p>
    <p>
      In the meantime, head <Link to="/">home</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
