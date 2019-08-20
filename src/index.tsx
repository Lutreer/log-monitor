import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import finalCreateStore from './store';
import { Provider } from 'react-redux';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';

import './assets/style/global.scss';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={finalCreateStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls(坑).
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
