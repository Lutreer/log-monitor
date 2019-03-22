import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/global.scss';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls(坑).
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
