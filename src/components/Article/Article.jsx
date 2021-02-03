import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, url }) => (
  <figure>
    <figcaption>{title}</figcaption>
    <figcaption>{author}</figcaption>
    <url src={url} />
  </figure>
);

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
