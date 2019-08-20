import React, { Component } from 'react';

import style from './style/Home.module.scss';
import SiderRouter from '../../router/Sider';

import { sider, isRoute, IMenu, IRoute } from '../../router/router';

import { Layout, Spin } from 'antd';
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
  public state: IHomeState;
  constructor(props: IHomeProps) {
    super(props);
    
    let {defaultSelectedKeys, defaultOpenKeys, navTabs} = this.setSelectedAndOpenKeysByRoute(sider, this.props.location.pathname);
    this.state = {
      defaultSelectedKeys: defaultSelectedKeys,
      defaultOpenKeys: defaultOpenKeys,
      navTabs:navTabs
    };
  }

  siderMenuToggleCollapsed(isCollapsed: boolean) {
    this.props.showSideMenu();
  }

  logout() {
    localStorage.removeItem(CONST.LOCALSTORAGE_USER_INFO);
    localStorage.removeItem(CONST.TOKEN);
    this.props.history.push('/login');
  }
  private isLogin() {
    let userString = localStorage.getItem(CONST.LOCALSTORAGE_USER_INFO);
    let token = localStorage.getItem(CONST.TOKEN);
    let userInfo: IUser = userString && JSON.parse(userString);

    if (
      !this.props.userInfo.token ||
      !this.props.userInfo.avatar ||
      !this.props.userInfo.userName
    ) {
      // 将localstroge里的用户信息存进store
      if (token && userInfo && userInfo.avatar && userInfo.userName) {
        this.props.setUserInfo(userInfo);
      } else {
        //缺一不可
        this.props.history.push('/login');
      }
    }
  }
  // 路由跳转后自动高亮选中侧边导航栏
  private setSelectedAndOpenKeysByRoute(menus: Array<IMenu | IRoute>, pathname: string) {
    let defaultSelectedKeys:Array<string> = []
    let defaultOpenKeys:Array<string> = []
    let navTabs:Array<IRoute> = []

    menus.forEach((el, index) => {
      if (isRoute(el)) {
        //一级路由匹配
        if (el.path === pathname) {
          defaultSelectedKeys = [el.path]
          navTabs.push(el)
          return;
        }
      } else if (!isRoute(el)) {
        // 二级路由匹配
        for (let i = 0; i < el.routes.length; i++) {
          if (el.routes[i].path === pathname) {
            defaultSelectedKeys = [el.routes[i].path]
            defaultOpenKeys = [el.name]
            navTabs.push(el.routes[i])
            return;
          }
        }
      }
    });
    return {
      defaultSelectedKeys:defaultSelectedKeys,
      defaultOpenKeys:defaultOpenKeys,
      navTabs:navTabs
    }
  }
  private tabClose(route: IRoute) {
    
  }

  private routeChange(route: IRoute) {
    if (this.state.defaultSelectedKeys[0] === route.path) return;
    let exist = this.state.navTabs.some(el => {
      return el.path === route.path
    })
    !exist && this.state.navTabs.push(route)
    console.warn("====",exist)
    let keys = []
    keys.push(route.path)
    this.setState({
      defaultSelectedKeys:keys
    })
  }

  render() {
    // 在根组件里设置用户的信息，非登录页要争用户权限
    if (this.props.location.pathname != '/login') {
      this.isLogin();
    }
    const { siderMenuCollapsed, userInfo } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderMenu
          menus={sider}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultOpenKeys={this.state.defaultOpenKeys}
          title={siderMenuCollapsed ? 'V' : 'VSA'}
          inlineCollapsed={siderMenuCollapsed}
          onToggleCollapsed={this.siderMenuToggleCollapsed.bind(this)}
          onLinkClick={this.routeChange.bind(this)}
        />
        <Layout style={siderMenuCollapsed ? { marginLeft: 80 } : { marginLeft: 200 }}>
          <Header
            style={{
              background: '#fff',
              padding: 0,
              height: 48,
              borderBottom: '1px solid #f5f7f7',
            }}
          >
            <GlobalHeader userInfo={userInfo} logout={this.logout.bind(this)} />
          </Header>
          {/* <NavTabs tabs={this.state.navTabs} activePath={this.state.defaultSelectedKeys[0]} onTabClose={this.tabClose.bind(this)} onTabClick={this.routeChange.bind(this)}/> */}
          
          <Content style={{ margin: '4px 0px 0', overflow: 'initial' }}>
          
            <div style={{ padding: 16, background: '#fff',minHeight:'100%'}}>
            <Spin spinning={this.props.loading}>
              <SiderRouter />
              </Spin>
            </div>
            
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Leasong {this.state.defaultSelectedKeys[0]}</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (store: any) => {
  let home: IHomeStore = store.home;
  let user: IUserStore = store.user;
  return {
    siderMenuCollapsed: store.home.siderMenuCollapsed,
    userInfo: user.userInfo,
    loading:home.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showSideMenu: bindActionCreators(action.sideMenuShowe, dispatch),
  setUserInfo: bindActionCreators(userAction.setUserInfo, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
