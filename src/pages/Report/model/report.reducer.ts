import { ActionType, IReportStore, GET_ONCE_TRIAL_REPORTS_SUCCESS, GET_ONCE_TRIAL_REPORTS_FAIL } from "./report.type";
import {message} from 'antd';
let initState: IReportStore = {
  onceTrialReports: {
    cs:[],
    ws:[],
    vm:[],
    ice:[]
  }
};
export default function reportReducer(state: IReportStore = initState, action: ActionType):IReportStore {
  switch (action.type) {
    case GET_ONCE_TRIAL_REPORTS_SUCCESS:
      return {...state,onceTrialReports:action.data};
    // case GET_ONCE_TRIAL_REPORTS_FAIL:
    //   return state
    default:
      return state;
  }
}



