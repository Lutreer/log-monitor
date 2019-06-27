import React, { Component, PureComponent } from 'react';
import style from './style/siderMenu.module.scss';

import { MenuInterface, RouteInterface, isRoute } from '../../router/router';

import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

interface SiderPropsInterface extends RouteComponentProps<any> {
  title: string;
  menus: Array<MenuInterface | RouteInterface>;
  toggleCollapsed: Function;
  inlineCollapsed: boolean;
}
interface SiderStateInterface {
  defaultSelectedKeys: Array<string>;
  defaultOpenKeys: Array<string>;
}
class SiderMenu extends Component<SiderPropsInterface, SiderStateInterface> {
  public state: SiderStateInterface;

  // 该成员为组件props设置默认值
  public static defaultProps: Partial<SiderPropsInterface> = {
    title: '',
    menus: [],
  };

  constructor(props: SiderPropsInterface, state: SiderStateInterface) {
    super(props);
    this.state = {
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
    };
    // this.setDefaultSelectedAndOpenKeys(this.props.menus);
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

  // 路由跳转后自动高亮选中侧边导航栏
  private setSelectedAndOpenKeysByRoute(menus: Array<MenuInterface | RouteInterface>, pathname:string) {
    menus.forEach((el, index) => {
      if (isRoute(el)) {
        //一级路由匹配
        if(el.path === pathname){
          this.state.defaultSelectedKeys = [el.name]
          return
        }
      } else if (!isRoute(el)) {
        // 二级路由匹配
        for(let i = 0; i < el.routes.length; i++){
          if(el.routes[i].path === pathname){
            this.state.defaultSelectedKeys = [el.routes[i].name]
            this.state.defaultOpenKeys = [el.name];
            return
          }
        }
      }
    });
  }
  private toggleCollapsed() {
    this.props.toggleCollapsed()
  };

  render(): JSX.Element {
    this.setSelectedAndOpenKeysByRoute(this.props.menus,this.props.location.pathname)
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
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultOpenKeys={this.state.defaultOpenKeys}
          style={{ textAlign: 'left' }}
          inlineCollapsed={this.props.inlineCollapsed}
        >
          {this.props.menus.map((el, index) => {
            return isRoute(el) ? (
              <Menu.Item key={el.name}>
                <Link to={el.path}><Icon type={el.icon} />{el.name}</Link>
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
                      <Link to={route.path}><Icon type={route.icon} />{route.name}</Link>
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