import Login from '../pages/User/Login';
import Home from '../pages/Home/Home';

import FormatIgeData from '../pages/Tool/FormatIgeData';
import Analysis from '../pages/Dashboard/Analysis';
import Game from '../pages/Game/Game';
import Report from '../pages/Report/Report';
export interface IMenu {
  name: string;
  path: string;
  icon: string;
  routes: Array<IRoute>;
}
export interface IRoute {
  name: string;
  path: string;
  component: React.ComponentType;
  icon: string;
  exact: boolean;
  default: boolean;
  authRoles?:Array<string>;
  authLogin?:boolean;
}

export function isRoute(route:IRoute | IMenu):route is IRoute{
  return (<IRoute>route).component !== undefined

}

export const index:Array<IRoute> = [
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
export const sider: Array<IMenu | IRoute> = [
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
        default: false,
      },
    ],
  },
  {
    name: 'Report',
    path: '/report',
    icon: 'tool',
    routes: [
      {
        name: 'Once Trial',
        path: '/report/onceTial',
        component: Report,
        icon: 'fund',
        exact: true,
        default: false,
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

export const top:Array<IMenu | IRoute> = [];
