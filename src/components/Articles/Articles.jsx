import React, { Component } from 'react';
import { getArticles } from '../../services/getArticles';
import ArticlesList from '../ArticlesList/ArticlesList';

export default class Articles extends Component {
  componentDidMount() {
    getArticles().then((articles) => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;

    return (
      <div>
        <ArticlesList articles={articles} />
      </div>
    );
  }
}
