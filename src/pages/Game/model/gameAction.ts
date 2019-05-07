import { GameListActionInterface } from "./gameType";

export default {
    getGameList(payload:any):GameListActionInterface{
        return {
            type: 'GET_GAME_LIST',
            payload:payload
        }
    }
}
