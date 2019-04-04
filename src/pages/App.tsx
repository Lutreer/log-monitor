import React, { Component } from 'react';
import style from './App.module.scss';
import IndexRouter from '../router/Index'
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
