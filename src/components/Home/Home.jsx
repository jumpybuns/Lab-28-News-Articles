import React, { Component } from 'react';
import Articles from '../Articles/Articles';
import Search from '../Search/Search';

export default class Home extends Component {
  state = {
    articles: [],
    searchArticles: '',
    loading: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.getSearch();
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchArticles: e.target.value });
  };
  render() {
    return (
      <div>
        <Articles />
        <Search onChange={this.handleChange} />
      </div>
    );
  }
}
