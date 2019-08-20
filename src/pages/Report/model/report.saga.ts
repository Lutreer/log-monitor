import { call, put, takeLatest } from 'redux-saga/effects';
import {
  IGetOnceTrialReportsAction,
  IGetOnceTrialReportsSuccessAction,
  IGetOnceTrialReportsFailAction,
  GET_ONCE_TRIAL_REPORTS_FAIL,
  GET_ONCE_TRIAL_REPORTS_SUCCESS,
  GET_ONCE_TRIAL_REPORTS,
} from './report.type';
import reportAction from './report.action'
import homeAction from '../../Home/model/home.action'
import ReportService from '../../../services/ReportService';

function* getOnceTrialReportsSage(action: IGetOnceTrialReportsAction) {
  yield put(homeAction.showLoading(true))
  let { payload } = action;
  try{
    let res:IResponse = yield call(ReportService.getOnceTrialReports, payload);
    if (res.code == 200) {
      yield put(reportAction.getOnceTrialReportsSuccessAction(res.data));
    } else {
      yield put(homeAction.errorMessage(res.message));
      // yield put(reportAction.getOnceTrialReportsFailAction(res.message));
    }
    
  }catch(err){
    yield put(homeAction.errorMessage(err.message));
    // yield put(reportAction.getOnceTrialReportsFailAction(err.message));
  }
  yield put(homeAction.showLoading(false))

  
}

export default function* sage() {
  yield takeLatest(GET_ONCE_TRIAL_REPORTS, getOnceTrialReportsSage);
}
