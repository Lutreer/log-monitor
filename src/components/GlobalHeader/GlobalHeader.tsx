import React, { Component } from 'react';
import style from './style/GlobalHeader.module.scss';
import { Dropdown, Menu, Icon } from 'antd';

export default class GlobalHeader extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Icon type="logout" /> Logout
        </Menu.Item>
        <Menu.Item>
          <Icon type="setting" /> Setting
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={style.headerNavRight}>
        <Icon className={style.menuItemIcon+ ' ' + style.menuItem} type="sound" />
        <Dropdown className={style.menuItemDropdown+ ' ' + style.menuItem} overlay={menu}>
          <div><Icon type="user" /><span style={{marginLeft:4}}>Leasong</span></div>
        </Dropdown>
        
      </div>
    );
  }
}
