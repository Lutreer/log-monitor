import Http from '../utils/Http'
import CONST from '../assets/js/CONST'
export default class GameService {
    static async getGameList(payload:any){
        return Http.post(CONST.SERVER.VMA + CONST.API.GAME_LIST, payload)
    }
}