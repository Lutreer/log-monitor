import React, { Component } from 'react';

import style from './style/Home.module.scss';
import SiderRouter from '../../router/Sider';

import { sider } from '../../router/router';

import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import SiderMenu from '../../components/SiderMenu/SiderMenu';
import NavTabs from '../../components/NavTabs/NavTabs';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import action from './model/home.action';
import userAction from '../User/model/user.action';
import CONST from '../../assets/js/CONST';
import { withRouter } from 'react-router-dom';
import { IHomeProps, IHomeState, IHomeStore } from './model/home.type';
import { IUser, IUserStore } from '../User/model/user.type';



class Home extends Component<IHomeProps, IHomeState> {
  public state: any;
  constructor(props: IHomeProps) {
    super(props);
  }

  siderMenuToggleCollapsed(isCollapsed: boolean) {
    this.props.showSideMenu();
  }

  logout(){
    localStorage.removeItem(CONST.LOCALSTORAGE_USER_INFO)
    localStorage.removeItem(CONST.TOKEN)
    this.props.history.push('/login')
  }
  private isLogin(){
    let userString = localStorage.getItem(CONST.LOCALSTORAGE_USER_INFO)
    let token = localStorage.getItem(CONST.TOKEN)
    let userInfo:IUser = userString && JSON.parse(userString)
    
    if(!this.props.userInfo.token || ! this.props.userInfo.avatar || !this.props.userInfo.userName){
      // 将localstroge里的用户信息存进store
      if (token && userInfo && userInfo.avatar && userInfo.userName) {
        this.props.setUserInfo(userInfo)
      }else{
        //缺一不可
        this.props.history.push('/login')
      }
    }
    
  }
  render() {
    // 在根组件里设置用户的信息，非登录页要争用户权限
    if(this.props.location.pathname != '/login'){
      this.isLogin()
    }
    const { siderMenuCollapsed, navTabs, userInfo } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderMenu
          menus={sider}
          title={siderMenuCollapsed ? 'W' : 'WMS'}
          inlineCollapsed={siderMenuCollapsed}
          toggleCollapsed={this.siderMenuToggleCollapsed.bind(this)}
        />
        <Layout style={siderMenuCollapsed ? { marginLeft: 80 } : { marginLeft: 200 }}>
          <Header
            style={{
              background: '#fff',
              padding: 0,
              height: 48,
              borderBottom: '1px solid #f0f2f5',
            }}
          >
            <GlobalHeader userInfo={userInfo} logout={this.logout.bind(this)}/>
          </Header>
          <NavTabs tabs={navTabs} />
          <Content style={{ margin: '4px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <SiderRouter />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Leasong{siderMenuCollapsed}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (store:any) => {
  let home:IHomeStore = store.home
  let user:IUserStore = store.user
  return {
    siderMenuCollapsed: store.home.siderMenuCollapsed,
    navTabs: home.navTabs,
    userInfo:user.userInfo,
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showSideMenu: bindActionCreators(action.sideMenuShowe, dispatch),
  addNavTab: bindActionCreators(action.addNavTab, dispatch),
  setUserInfo: bindActionCreators(userAction.setUserInfo, dispatch),
});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
