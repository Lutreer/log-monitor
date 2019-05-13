import React, { Component } from 'react'
import {Affix, Icon, Tooltip, Avatar} from 'antd'
import style from './style/navTabs.module.scss'
interface PropsInterface {
  tabs:Array<any>
}


export default class NavTabs extends Component<PropsInterface, any> {
   

  render() {
    let {tabs} = this.props
    return (
        <Affix offsetTop={0}>
            <div className={style.affix}>
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip mouseEnterDelay={1} mouseLeaveDelay={0} placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>dfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>ssffsdfsdfsdfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item} ${style.nav_item_active}`}><Icon type="robot"/><Tooltip placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>ssffsdfsdfsdfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>ssffsdfsdfsdfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>s77df12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>ssffsdfsdfsdfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>ssffsdfsdfsdfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
                <div className={`${style.nav_item}`}><Icon type="robot"/><Tooltip placement="bottom" title={"ssffsdfsdfsdfsdf12345"}><span>ssffsdfsdfsdfsdf12345</span></Tooltip> <Icon className={style.close} type="close"/></div> 
            </div>
        </Affix>
    )
  }
}
