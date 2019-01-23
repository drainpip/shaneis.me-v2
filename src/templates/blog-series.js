import React from 'react'
import { Link } from 'gatsby'

const BlogSeries = ({ currentPost, series }) => {
  const seriesData = series[0].node.frontmatter
  return (
    <React.Fragment>
      <p>{seriesData.seriesBlurb}</p>
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
        {!seriesData.seriesEnded && <li>More Coming Soon...</li>}
      </ol>
    </React.Fragment>
  )
}

export default BlogSeries
