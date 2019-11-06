const SERVER: { [key: string]: any } = {
  DEVELOPMENT: {
    VMA: 'http://test.vm.admin.synative.com',
    MAIN: 'http://10.200.14.223:3333',
  },
  TEST: {
    VMA: 'http://test.vm.admin.synative.com',
    MAIN: 'http://10.200.14.223:3333',
  },
  PRODUCTION: {
    VMA: 'http://test.vm.admin.synative.com',
    MAIN: 'http://127.0.0.1:3333',
  },
};

const CONST: any = {
  SERVER: {},
  API: {
    LOGIN: '/api/user/login',
    ONCE_TRIAL_REPORTS: '/api/trialReport/getOnceTrialReports',
    VMA: {
      GAME_LIST: '/api/v1/gamelist',
    },
  },
  TOKEN: 'TOKEN',
  LOCALSTORAGE_USER_INFO: 'LOCALSTORAGE_USER_INFO',
};
const env = process.env.NODE_ENV.toLocaleUpperCase();
CONST.SERVER = SERVER[env];
export default CONST;
