import { SHOW_SIDE_MENU, SHOW_LOADING, LOGOUT, ISideMenuShoweAction, IShowLoadingAction, IMessageAction, ERROR_MESSAGE, WARN_MESSAGE, INFO_MESSAGE } from './home.type';
export default {
  sideMenuShowe():ISideMenuShoweAction {
    return {
      type: SHOW_SIDE_MENU,
    };
  },
  showLoading(show: boolean):IShowLoadingAction {
    return {
      type: SHOW_LOADING,
      data: show,
    };
  },
  errorMessage(message: string):IMessageAction {
    return {
      type: ERROR_MESSAGE,
      data: message,
    };
  },
  warnMessage(message: string):IMessageAction {
    return {
      type: WARN_MESSAGE,
      data: message,
    };
  },
  infoMessage(message: string):IMessageAction {
    return {
      type: INFO_MESSAGE,
      data: message,
    };
  }
};
