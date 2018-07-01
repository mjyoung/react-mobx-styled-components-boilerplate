import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { hot } from 'react-hot-loader';
import { injectGlobal, ThemeProvider } from 'styled-components';
import baseStyles from './styles/_base';
import theme from './styles/_theme';

import RootStore from './stores';

import HomePage from './views/HomePage';
import TodoPage from './views/TodoPage';

const stores = {
  TodoStore: RootStore.TodoStore,
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider {...stores}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/todo" component={TodoPage} />
            </div>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
  }
}

injectGlobal`
  ${baseStyles}
`;

export default hot(module)(App);
