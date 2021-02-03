import React from 'react';
import Article from '../Article/Article';

const ArticlesList = ({ articles }) => {
  const articleElements = articles.map((article) => (
    <li key={article.id}>
      <Article {...article} />
    </li>
  ));

  return <ul>{articleElements}</ul>;
};
