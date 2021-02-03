import React from 'react';

const Article = ({ title, author, url }) => (
  <figure>
    <figcaption>{title}</figcaption>
    <figcaption>{author}</figcaption>
    <url src={url} />
  </figure>
);

export default Article;
