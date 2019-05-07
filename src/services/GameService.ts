import Http from '../utils/Http'

export default class GameService {
    getGameList(){
        return Http.get("")
    }
}