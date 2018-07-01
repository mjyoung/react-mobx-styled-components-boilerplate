import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { hot } from 'react-hot-loader';
import './styles/app.css';

import RootStore from './stores';

import HomePage from './views/HomePage';
import TodoPage from './views/TodoPage';

const stores = {
  TodoStore: RootStore.TodoStore,
};

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/todo" component={TodoPage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
