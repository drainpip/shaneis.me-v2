import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>Link Does Not Exist</h2>
    <p>
      Go <Link to="/">home</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
