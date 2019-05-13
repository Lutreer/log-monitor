import Login from '../pages/User/Login';
import Home from '../pages/Home/Home';

import FormatIgeData from '../pages/Tool/FormatIgeData';
import Analysis from '../pages/Dashboard/Analysis';
import Game from '../pages/Game/Game';
export interface MenuInterface {
  name: string;
  path: string;
  icon: string;
  routes: Array<RouteInterface>;
}
export interface RouteInterface {
  name: string;
  path: string;
  component: React.ComponentType;
  icon: string;
  exact: boolean;
  default: boolean;
  authRoles?:Array<string>;
  authLogin?:boolean;
}

export function isRoute(route:RouteInterface | MenuInterface):route is RouteInterface{
  return (<RouteInterface>route).component !== undefined

}

export const index:Array<RouteInterface> = [
  {
    name: 'Login',
    path: '/login',
    component: Login,
    exact: true,
    icon: '',
    default: false,
    authLogin:false
  },
  {
    name: 'Home',
    path: '/',
    component: Home,
    icon: '',
    exact: false,
    default: true,
    authLogin:true
  },
];
export const sider: Array<MenuInterface | RouteInterface> = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard',
    routes: [
      {
        name: 'Analysis',
        path: '/dashboard/analysis',
        component: Analysis,
        icon: 'fund',
        exact: true,
        default: false,
      },
    ],
  },
  {
    name: 'Game',
    path: '/game',
    icon: 'tool',
    routes: [
      {
        name: 'Game List',
        path: '/game/list',
        component: Game,
        icon: 'fund',
        exact: true,
        default: true,
      },
    ],
  },
  {
    name: 'Tool',
    path: '/tool',
    icon: 'tool',
    routes: [
      {
        name: 'Formatigedata',
        path: '/tool/format-ige-data',
        component: FormatIgeData,
        icon: 'robot',
        exact: true,
        default: false,
      },
    ],
  },
];

export const top:Array<MenuInterface | RouteInterface> = [];
