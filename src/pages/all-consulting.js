import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const description = `Shane Duff has been writing code for over twenty years. 
  He can write more code for you, or fix your web strategy, 
  or get your project back on track, or anything else 
  regarding sending a website to a browser.`

const AllConsulting = () => (
  <Layout>
    <SEO title="I'm All Consulting" description={description} />
    <h2>I'm all consulting</h2>
    <p>
      I've been building websites for over twenty years now. I've worked in just
      about every type of organization that builds websites: freelance,
      agencies, marketing departments, product engineering.
    </p>
    <p>
      I can bring just about any size project across the finish line by myself,
      or by bringing in as many of my large network of contemporaries that are
      needed.
    </p>
    <p>
      Lately I have refactored massive front end applications into React and
      GraphQL. I've helped to move a website to a new host, domains to a new
      registrar, and cleaned up the mess that was their DNS settings. I've moved
      a business to a new WordPress theme, taught them how to use it, and
      managed a designer that rebranded them.
    </p>
    <p>
      Please <a href="mailto:me@shaneis.me">reach out to me</a> if you're
      interested in working with me, or even if you have questions about how a
      project like this should work because you've never done it before. I'll be
      very open and honest with you about this very difficult, but fun, process.
      Don't be surprised when I ask you what your budget is - I need to know
      this to understand if what you want is possible, not to try and trick you.
    </p>
  </Layout>
)

export default AllConsulting
