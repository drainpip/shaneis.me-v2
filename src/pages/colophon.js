import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Colophon = () => (
  <Layout>
    <Seo title="Colophon" />
    <h2>Colophon</h2>
    <p>This site is built with the help of viewers like you.</p>
    <p>As well as this stuff:</p>
    <ul>
      <li>
        <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </li>
      <li>
        <a href="https://reactjs.org/">React</a>
      </li>
      <li>
        <a href="https://reach.tech/router">Reach Router</a>
      </li>
      <li>
        <a href="https://graphql.org/">GraphQL</a>
      </li>
      <li>System Fonts</li>
      <li>Spare Time</li>
    </ul>
  </Layout>
)

export default Colophon
