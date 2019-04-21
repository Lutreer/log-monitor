import React, { Component } from 'react';
import style from './style/SiderMenu.module.scss';

import { MenuInterface, RouteInterface, isRoute } from '../../router/router';

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

interface SiderPropsInterface {
  title: string;
  menus: Array<MenuInterface | RouteInterface>;
  toggleCollapsed: Function;
}
interface SiderStateInterface {
  defaultSelectedKeys: Array<string>;
  defaultOpenKeys: Array<string>;
  inlineCollapsed: boolean;
}
export default class SiderMenu extends Component<SiderPropsInterface, SiderStateInterface> {
  public state: SiderStateInterface;

  // 改成员为组件props设置默认值
  public static defaultProps: Partial<SiderPropsInterface> = {
    title: '',
    menus: [],
  };

  constructor(props: SiderPropsInterface, state: SiderStateInterface) {
    super(props);
    this.state = {
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
      inlineCollapsed: false,
    };
    this.setDefaultSelectedAndOpenKeys(this.props.menus);
  }

  private setDefaultSelectedAndOpenKeys(menus: Array<MenuInterface | RouteInterface>) {
    menus.forEach((el, index) => {
      if (isRoute(el) && el.default) {
        let route = el as RouteInterface;
        this.state.defaultOpenKeys = [...this.state.defaultOpenKeys, route.name];
      } else if (!isRoute(el)) {
        el.routes.map((route: RouteInterface, index) => {
          if (route.default) {
            this.state.defaultOpenKeys = [...this.state.defaultOpenKeys, el.name];
            this.state.defaultSelectedKeys = [...this.state.defaultSelectedKeys, route.name];
          }
        });
      }
    });
  }
  private toggleCollapsed() {
    this.setState({
      inlineCollapsed: !this.state.inlineCollapsed,
    },() => {
      // 如果 setState 之后立即使用该值，会取不到新值，可以在回调中获取
      this.props.toggleCollapsed(this.state.inlineCollapsed)
    });
    
  };

  render(): JSX.Element {
    return (
      <Sider
        collapsible
        collapsed={this.state.inlineCollapsed}
        onCollapse={this.toggleCollapsed.bind(this)}
        className={style.sider}
      >
        <div className={style.logo}>{this.props.title}</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultOpenKeys={this.state.defaultOpenKeys}
          style={{ textAlign: 'left' }}
          inlineCollapsed={this.state.inlineCollapsed}
        >
          {this.props.menus.map((el, index) => {
            return isRoute(el) ? (
              <Menu.Item key={el.name}>
                <Icon type={el.icon} />
                <span>{el.name}</span>
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
                {el.routes.map((route: RouteInterface, index) => {
                  return (
                    <Menu.Item key={route.name}>
                      <Icon type={route.icon} />
                      <span>{route.name}</span>
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
