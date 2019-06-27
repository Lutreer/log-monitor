import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStore, Dispatch } from 'redux';

import Login from '../pages/User/Login';
import { index } from './router';
import { connect } from 'react-redux';
import CONST from '../assets/js/CONST';

interface PropsInterface {
  user: any;
}
class Index extends Component<PropsInterface> {
  render() {
    let { user } = this.props;
    let routeDom: Array<JSX.Element> = [];

    index.forEach((route, index) => {
      // let rou = route.authLogin ? (
      //   <Route
      //     key={index}
      //     path={route.path}
      //     exact={route.exact}
      //     render={() => <Redirect key="login" to="/login" />}
      //   />
      // ) : (
      //   <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      // );
      routeDom.push(<Route key={index} path={route.path} exact={route.exact} component={route.component} />);

      if (route.default) {
        routeDom.push(<Redirect key={index} to={route.path} />);
      }
    });
    return <Switch>{routeDom}</Switch>;
  }
}
let mapStateToProps = (state: any) => ({
  user: state.user,
});

// export default connect(mapStateToProps,mapDispathToProps)(Index)
export default connect(
  mapStateToProps,
  null
)(Index);
