import { GetGameListActionInterface, GET_GAME_LIST } from "./game.type";

export default {
    getGameList(payload:any):GetGameListActionInterface{
        return {
            type: GET_GAME_LIST,
            payload:payload
        }
    }
}
