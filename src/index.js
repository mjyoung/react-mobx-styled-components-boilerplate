import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './styles/app.css';
import App from './App';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRootContainer = require('./App').default; // eslint-disable-line global-require
    render(<NextRootContainer />, document.getElementById('root'));
  });
}
