import React from 'react';
import Article from '../Article/Article';
import PropTypes from 'prop-types';

const ArticlesList = ({ articles }) => {
  const articlesList = articles.map((article) => (
    <li key={article.url}>
      <Article {...article} />
    </li>
  ));

  return <ul>{articlesList}</ul>;
};

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlesList;
