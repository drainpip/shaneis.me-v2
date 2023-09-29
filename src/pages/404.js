import React from 'react';

import Layout from '../components/layout';
import TagsList from '../components/tags-list';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h2>Quoth the server: 404</h2>
    <p>Try to find what you're looking for with these links:</p>
    <TagsList />
  </Layout>
);

export default NotFoundPage;
