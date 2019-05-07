import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { sider, MenuInterface, RouteInterface, isRoute } from './router';


export default class Sider extends Component {
  private generateRoute():Array<JSX.Element>{
    let routeDom: Array<JSX.Element> = [];
    sider.forEach((el:MenuInterface | RouteInterface, index_1) => {
      if(isRoute(el)){
        let route:RouteInterface = el;
        routeDom.push(
          <Route
            key={index_1}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
        if (route.default) {
          routeDom.push(
              <Redirect key={index_1} to={route.path}/>
          )
        }
        
      }else{
        let menu:MenuInterface = el;
        menu.routes.forEach((route:RouteInterface, index_2:number) => {
          routeDom.push(
            <Route
              key={index_1 + '-' + index_2}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
          if (route.default) {
            routeDom.push(
                <Redirect key={index_1 + '-' + index_2} to={route.path}/>
            )
          }
        });
      }
    });
    return routeDom
  }
  render() {
    let routeDom = this.generateRoute()
    return <Switch>{routeDom}</Switch>;
  }
}
