import React, { Component } from 'react';

import style from './style/game.module.scss';
import SiderRouter from '../../router/Sider';

import { sider } from '../../router/router';

import { Layout, Menu, Icon, Breadcrumb, Dropdown } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


import SiderMenu from '../../components/SiderMenu/SiderMenu';
import NavTabs from '../../components/NavTabs/NavTabs';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import action from './model/game.action';
import { GameInterface } from './model/game.type';

export interface GameStateInterface {
  gameList: Array<GameInterface>
}
interface GamePropsInterface extends GameStateInterface {
  
}

class Game extends Component<GamePropsInterface, GameStateInterface> {
  public state: any;
  constructor(props: GamePropsInterface) {
    super(props);
  }

  render() {
    const {
      gameList
    } = this.props
    return (
      <div>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>game</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
        <p>ddddd</p>
      </div>
    );
  }
}

const mapStateToProps = ({game}:{[key:string]:GameStateInterface}) => {
  return {
    gameList: game.gameList,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getGameList:  bindActionCreators(action.getGameList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)

