import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { top } from './router';

interface RouterMenu {
  name:string,
  path: string,
  component: React.ComponentType,
  icon:string,
  exact:boolean,
  default:boolean
}
export default class Sider extends Component {
  // render() {
  //   let routeDom: Array<JSX.Element> = [];
  //   top.forEach((menus, index_1) => {
  //     menus.routes.forEach((route:RouterMenu, index_2:number) => {
  //       routeDom.push(
  //         <Route
  //           key={index_1 + '-' + index_2}
  //           path={route.path}
  //           exact={route.exact}
  //           component={route.component}
  //         />
  //       );
  //       if (route.default) {
  //         routeDom.push(
  //             <Redirect key={index_1 + '-' + index_2} to={route.path}/>
  //         )
  //       }
  //     });
  //   });

  //   return <Switch>{routeDom}</Switch>;
  // }
}
