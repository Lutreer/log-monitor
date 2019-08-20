import Http from '../utils/Http'
import CONST from '../assets/js/CONST'
export default class ReportService {
    static async getOnceTrialReports(payload:any){
        
        return Http.get(CONST.SERVER.MAIN + CONST.API.ONCE_TRIAL_REPORTS, {
            params:payload
        })
    }
}