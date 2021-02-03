import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Search from '../Search/Search';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/:search"
              exact
              render={(routerProps) => <Search {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
