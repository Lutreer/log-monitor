import Login from '../pages/User/Login';
import Home from '../pages/Home/Home';

import FormatIgeData from '../pages/Tool/FormatIgeData'
import Analysis from '../pages/Dashboard/Analysis';

export const index = [
  
  {
    name:'Login',
    path: '/login',
    component: Login,
    exact:true,
    icon:null,
  },
  {
    name:'',
    path: '/',
    component: Home,
    icon:null,
    exact:false,
    default:true
  },
];
export const sider = [
  {
    name:'Dashboard',
    path:'/dashboard',
    icon:'',
    routes:[
      {
        name:'Analysis',
        path: '/dashboard/analysis',
        component: Analysis,
        icon:'',
        exact:true,
        default:false
      },
    ]
  },
  {
    name:'Tool',
    path:'/tool',
    icon:'',
    routes:[
      {
        name:'Formatigedata',
        path: '/tool/format-ige-data',
        component: FormatIgeData,
        icon:'',
        exact:true,
        default:false
      }
    ]
  }
  
  
];

export const top = [
  
];
