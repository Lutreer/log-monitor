import React, { Component } from 'react';
import style from './App.module.scss';
import IndexRouter from '../router/Index'
// import IndexRouter from '../router/Sider'


class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <IndexRouter/>
      </div>
    );
  }
}

export default App;
