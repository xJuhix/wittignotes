import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const fallbackMeta = {
  title: 'WittigNotes',
  description: 'WittigNotes is a blog developed to share opinions, reviews and tips on Books, Economics and Productivity',
}

const Head = ({ title = fallbackMeta.title, description = fallbackMeta.description, photo }) => (
  <Helmet>
    <html lang="en" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content={description}
    />

    <meta
      name="keywords"
      content="blog, tips, opinions, books, economics, productivity, reviews, "
    />

    <meta
      property="og:title"
      content={title}
    />
  </Helmet>
)

export default Head

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}