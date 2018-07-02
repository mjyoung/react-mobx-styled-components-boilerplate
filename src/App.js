import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { hot } from 'react-hot-loader';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Loadable from 'react-loadable';

import baseStyles from './styles/_base';
import theme from './styles/_theme';

import RootStore from './stores';

import Loading from './components/Loading';

const stores = {
  TodoStore: RootStore.TodoStore,
};

const HomePage = Loadable({
  loader: () => import('./views/HomePage'),
  loading: Loading,
});

const TodoPage = Loadable({
  loader: () => import('./views/TodoPage'),
  loading: Loading,
});

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
