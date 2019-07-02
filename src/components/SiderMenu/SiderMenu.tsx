import React, { Component, PureComponent } from 'react';
import style from './style/siderMenu.module.scss';

import { IMenu, IRoute, isRoute } from '../../router/router';

import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

interface ISiderProps extends RouteComponentProps<any> {
  title: string;
  menus: Array<IMenu | IRoute>;
  onToggleCollapsed: Function;
  inlineCollapsed: boolean;
  defaultSelectedKeys: Array<string>;
  defaultOpenKeys: Array<string>;
  onLinkClick:Function
}
interface ISiderState {
  
}
class SiderMenu extends Component<ISiderProps, ISiderState> {
  public state: ISiderState;

  // 该成员为组件props设置默认值
  public static defaultProps: Partial<ISiderProps> = {
    title: '',
    menus: [],
  };

  constructor(props: ISiderProps, state: ISiderState) {
    super(props);
    this.state = {
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
    };
  }
  private toggleCollapsed() {
    this.props.onToggleCollapsed()
  };

  private linkClick(route:IRoute){
    this.props.onLinkClick(route)
  }

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.props.inlineCollapsed}
        onCollapse={this.toggleCollapsed.bind(this)}
        className={style.sider}
      >
        <div className={style.logo}>{this.props.title}</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={this.props.defaultSelectedKeys}
          defaultOpenKeys={this.props.defaultOpenKeys}
          style={{ textAlign: 'left' }}
          inlineCollapsed={this.props.inlineCollapsed}
        >
          {this.props.menus.map((el, index) => {
            return isRoute(el) ? (
              <Menu.Item key={el.path}>
                <Link to={el.path} onClick={this.linkClick.bind(this,el)}><Icon type={el.icon}/>{el.name}</Link>
              </Menu.Item>
            ) : (
              <SubMenu
                key={el.name}
                title={
                  <span>
                    <Icon type={el.icon} />
                    <span>{el.name}</span>
                  </span>
                }
              >
                {el.routes.map((route: IRoute, index) => {
                  return (
                    <Menu.Item key={route.path}>
                      <Link to={route.path} onClick={this.linkClick.bind(this,route)}><Icon type={route.icon} />{route.name}</Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sider>
    );
  }
}
export default withRouter(SiderMenu)