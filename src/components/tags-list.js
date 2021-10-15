import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

const TagsList = () => (
  <StaticQuery
    query={graphql`
      query TagQuery {
        allMarkdownRemark(
          limit: 2000
          filter: { frontmatter: { tags: { ne: "" } } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <React.Fragment>
        <h3>Tags</h3>
        <ul>
          {allMarkdownRemark.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/blog/${tag.fieldValue}`}>
                {tag.fieldValue} - {tag.totalCount} post
                {tag.totalCount === 1 ? '' : 's'}
              </Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )}
  />
);

export default TagsList;
