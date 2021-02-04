import React, { Component } from 'react';
import { getArticles } from '../../services/getArticles';
import { getSearch } from '../../services/getSearch';
import Search from './Search';
import ArticlesList from '../ArticlesList/ArticlesList';

export default class NewsSearch extends Component {
  state = {
    searchArticles: '',
    articles: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    getArticles().then((articles) => this.setState({ articles }));
    this.setState({ loading: false });
  }

  handleChange = ({ target }) => {
    getSearch(target.value).then((articles) => this.setState({ articles }));
    this.setState({ searchArticles: target.value });
  };

  render() {
    const { searchArticles, articles } = this.state;
    return (
      <div>
        <Search searchArticles={searchArticles} onChange={this.handleChange} />
        <ArticlesList articles={articles} />
      </div>
    );
  }
}
