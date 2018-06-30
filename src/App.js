import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import RootStore from './stores';

import HomePage from './views/HomePage';
import TodoPage from './views/TodoPage';

const stores = {
  TodoStore: RootStore.TodoStore,
};

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <HashRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/todo" component={TodoPage} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}
