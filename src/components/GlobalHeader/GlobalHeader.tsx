import React, { Component } from 'react';
import style from './style/GlobalHeader.module.scss';
import { Dropdown, Menu, Icon } from 'antd';
import { IUser } from '../../pages/User/model/user.type';

interface IHeaderProps {
  logout: Function;
  userInfo: IUser;
}
interface IHeaderState {}
class GlobalHeader extends Component<IHeaderProps, IHeaderState> {
  private logout() {
    this.props.logout();
  }
  render() {
    let userInfo = this.props.userInfo;
    const menu = (
      <Menu>
        <Menu.Item>
          <Icon type="logout" onClick={this.logout.bind(this)} /> Logout
        </Menu.Item>
        <Menu.Item>
          <Icon type="setting" /> Setting
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={style.headerNavRight}>
        <Icon className={style.menuItemIcon + ' ' + style.menuItem} type="sound" />
        <Dropdown className={style.menuItemDropdown + ' ' + style.menuItem} overlay={menu}>
          <div>
            <Icon type="user" />
            {/* <span style={{ marginLeft: 4 }}>{userInfo.userName}</span> */}
          </div>
        </Dropdown>
      </div>
    );
  }
}
export default GlobalHeader;
