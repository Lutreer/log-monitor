import Http from '../utils/Http'
import CONST from '../assets/js/CONST'
export default class UserService {
    static async login(payload:any){
        return Http.post(CONST.SERVER.MAIN + CONST.API.LOGIN, payload)
    }
}