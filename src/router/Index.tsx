import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStore } from 'redux'

import { index } from './router';
export default class Index extends Component {
  render() {
    let routeDom: Array<JSX.Element> = [];
    index.forEach((route, index) => {
      routeDom.push(
        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      );

      if (route.default) {
        routeDom.push(
            <Redirect key={index} to={route.path} />
        )
      }
    });
    return <Switch>{routeDom}</Switch>;
  }
}
