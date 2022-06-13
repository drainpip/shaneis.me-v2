import React from 'react';

import Layout from '../components/layout';
import TagsList from '../components/tags-list';
import Seo from '../components/seo';

const Blog = () => (
  <Layout>
    <Seo title="Blog Index" />
    <h2>Tags</h2>
    <p>Choose your own adventure.</p>
    <TagsList />
  </Layout>
);

export default Blog;
