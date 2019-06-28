import React, { Component } from 'react';
import style from './App.module.scss';
import IndexRouter from '../router/Index'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

// import IndexRouter from '../router/Sider'

interface IAppProps extends RouteComponentProps<any> {
}

class App extends Component<IAppProps, any> {
  constructor(props: IAppProps, state: any) {
    super(props, state);
    this.state = state;
  }
  render() {
    return (
      <div className={style.App}>
        <IndexRouter/>
      </div>
    );
  }
}
let mapStateToProps = (store:any) => {
  return {

  }
}
let mapDispathToProps = (dispath:Dispatch) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps,mapDispathToProps)(App));
