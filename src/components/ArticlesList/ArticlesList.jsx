import React from 'react';
import Article from '../Article/Article';
import PropTypes from 'prop-types';

const ArticlesList = ({ articles }) => {
  const articleElements = articles.map((article) => (
    <li key={article.id}>
      <Article {...article} />
    </li>
  ));

  return <ul>{articleElements}</ul>;
};

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ArticlesList;
