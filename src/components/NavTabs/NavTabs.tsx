import React, { Component } from 'react';
import { Affix, Icon, Tooltip, Avatar } from 'antd';
import style from './style/navTabs.module.scss';
import { IRoute } from '../../router/router';
import { Link } from 'react-router-dom';
interface INavTabsProps {
  tabs: Array<IRoute>;
  activePath: string;
  onTabClick: Function;
  onTabClose: Function;
}

export default class NavTabs extends Component<INavTabsProps, any> {
  private onTabClick(route: IRoute) {
    this.props.onTabClick(route);
  }
  private onTabClose(route: IRoute) {
    this.props.onTabClose(route);
  }

  render() {
    let { tabs, activePath } = this.props;
    if (tabs.length === 0) return null;
    return (
      <Affix offsetTop={0}>
        <div className={style.affix}>
          {tabs.map(el => {
            return (
              <div
                key={el.name}
                className={
                  `${style.nav_item} ` + (el.path === activePath ? `${style.nav_item_active}` : '')
                }
              >
                <Icon type={el.icon} />
                <Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={el.name}>
                  <Link to={el.path}>
                    <span onClick={this.onTabClick.bind(this, el)}>{el.name}</span>
                  </Link>
                </Tooltip>
                <Icon className={style.close} onClick={this.onTabClose.bind(this, el)} type="close" />
              </div>
            );
          })}
        </div>
      </Affix>
    );
  }
}
