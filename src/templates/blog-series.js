import React from 'react'
import { Link } from 'gatsby'

const BlogSeries = ({ currentPost, series }) => {
  const blurb = series[0].node.frontmatter.seriesBlurb
  const seriesEnded = series[0].node.frontmatter.seriesEnded
  return (
    <React.Fragment>
      <p>{blurb}</p>
      <h4>Series</h4>
      <ol>
        {series.map(({ node }) => (
          <li key={node.fields.slug}>
            {node.fields.slug === currentPost ? (
              node.frontmatter.description
            ) : (
              <Link to={node.fields.slug}>{node.frontmatter.description}</Link>
            )}
          </li>
        ))}
        {!seriesEnded && <li>More Coming Soon...</li>}
      </ol>
    </React.Fragment>
  )
}

export default BlogSeries
