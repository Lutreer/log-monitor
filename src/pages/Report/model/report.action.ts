import { GET_ONCE_TRIAL_REPORTS, IGetOnceTrialReportsAction, IGetOnceTrialReportsSuccessAction, GET_ONCE_TRIAL_REPORTS_SUCCESS, IOnceTrialReports, IGetOnceTrialReportsFailAction, GET_ONCE_TRIAL_REPORTS_FAIL } from "./report.type";

export default {
    getOnceTrialReports(payload:any):IGetOnceTrialReportsAction{
        return {
            type: GET_ONCE_TRIAL_REPORTS,
            payload:payload
        }
    },
    getOnceTrialReportsSuccessAction(data:IOnceTrialReports):IGetOnceTrialReportsSuccessAction{
        return {
            type: GET_ONCE_TRIAL_REPORTS_SUCCESS,
            data:data
        }
    },
    getOnceTrialReportsFailAction(message:string):IGetOnceTrialReportsFailAction{
        return {
            type: GET_ONCE_TRIAL_REPORTS_FAIL,
            message:message
        }
    }
}
