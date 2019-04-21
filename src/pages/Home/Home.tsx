import React, { Component } from 'react';

import style from './style/Home.module.scss';
import SiderRouter from '../../router/Sider';



import { sider } from '../../router/router';

import { Layout, Menu, Icon, Breadcrumb, Dropdown } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const SubMenu = Menu.SubMenu;

import SiderMenu from '../../components/SiderMenu/SiderMenu';
import NavTabs from '../../components/NavTabs/NavTabs';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
interface HomePropsInterface {
  
}
export default class Home extends Component<HomePropsInterface,any> {
  public state:any;
  constructor(props:HomePropsInterface) {
    super(props);
    this.state = {
      siderMenuIsCollapsed:false
    }
  }

  siderMenuToggleCollapsed(isCollapsed:boolean){
    this.setState({
      siderMenuIsCollapsed:isCollapsed
    })
  }


  render() {
    
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderMenu menus={sider} title="WM" toggleCollapsed={this.siderMenuToggleCollapsed.bind(this)}/>
        <Layout style={this.state.siderMenuIsCollapsed ? { marginLeft: 80 } : {marginLeft: 200}}>
          <Header style={{ background: '#fff', padding: 0,height:48, borderBottom: '1px solid #f0f2f5'}}>
          <GlobalHeader></GlobalHeader>
          </Header>
          <NavTabs></NavTabs>
          <Content style={{ margin: '4px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <SiderRouter />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Leasong</Footer>
        </Layout>
      </Layout>
    );
  }
}
