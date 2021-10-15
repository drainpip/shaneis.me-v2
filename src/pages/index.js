import React from 'react';

import Layout from '../components/layout';
import PostIndex from '../components/post-index';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`shane duff`, `coding`, `fiction`]} />
    <p>
      I've always had grandiose plans for a personal website that have never
      come to fruition. Instead my creative energy goes into work or fanciful
      things like writing stories for an audience of one.
    </p>

    <PostIndex />

    <h4>More?</h4>

    <p>
      I'm pretty good at my three C's: cars, computers, and canines. I have been
      an ASE Parts Specialist so no mechanic can cheat me. I have been tinkering
      with computer hardware and programming since the early 90's. I also spent
      a few years learning about canine behavior including six months of direct
      work with a senior trainer - I did this more for personal learning than
      starting a business, but I'm certainly open to such things.
    </p>

    <p>
      I have a <a href="https://github.com/drainpip">Github</a> profile for you
      to check out, my work history over on{' '}
      <a href="https://www.linkedin.com/in/shaneduff/">LinkedIn</a>, and if
      you'd like to see me <a href="http://twitter.com/drainpip">unfiltered</a>{' '}
      have at it.
    </p>
  </Layout>
);

export default IndexPage;
