import React, { Component } from 'react';
import style from './App.module.scss';
import IndexRouter from '../router/Index'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CONST from '../assets/js/CONST';
import { IUser } from './User/model/user.type';
// import IndexRouter from '../router/Sider'

interface IAppProps extends RouteComponentProps<any> {
  
}

class App extends Component<IAppProps, any> {
  private isLogin(){
    let userInfo:IUser = JSON.parse(localStorage.getItem(CONST.LOCALSTORAGE_USER_INFO) || "{}")
    if (userInfo.id && userInfo.avator && userInfo.userName) {
      

    }else{
      //缺一不可
      this.props.history.go
    }
  }
  render() {
    // 在根组件里设置用户的信息，非登录页要争用户权限
    this.props.history
    debugger
    if(this.props.location.pathname != 'login'){
      this.isLogin()
    }
    return (
      <div className={style.App}>
        <IndexRouter/>
      </div>
    );
  }
}

export default withRouter(App);
