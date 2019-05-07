import React, { Component } from 'react';

import style from './style/Home.module.scss';
import SiderRouter from '../../router/Sider';

import { sider } from '../../router/router';

import { Layout, Menu, Icon, Breadcrumb, Dropdown } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


import SiderMenu from '../../components/SiderMenu/SiderMenu';
import NavTabs from '../../components/NavTabs/NavTabs';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import action from './model/homeAction';

interface HomePropsInterface extends HomeStateInterface {
  showSideMenu:Function
}

export interface HomeStateInterface {
  siderMenuCollapsed:boolean,
  navTabs:Array<any>
}

class Home extends Component<HomePropsInterface, HomeStateInterface> {
  public state: any;
  constructor(props: HomePropsInterface) {
    super(props);
  }

  siderMenuToggleCollapsed(isCollapsed: boolean) {
    this.props.showSideMenu()
  }
  render() {
    const {
      siderMenuCollapsed,
      navTabs
    } = this.props
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderMenu
          menus={sider}
          title="WM"
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
            <GlobalHeader />
          </Header>
          <NavTabs tabs={navTabs}/>
          <Content style={{ margin: '4px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <SiderRouter />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Leasong{siderMenuCollapsed}</Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = ({home}:{[key:string]:HomeStateInterface}) => {
  return {
    siderMenuCollapsed: home.siderMenuCollapsed,
    navTabs: home.navTabs
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showSideMenu:  bindActionCreators(action.sideMenuShowe, dispatch),
  addNavTab:  bindActionCreators(action.addNavTab, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

