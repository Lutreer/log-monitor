import { LoginActionInterface, LOGIN } from "./user.type";

export default {
    login(payload:any):LoginActionInterface{
        return {
            type: LOGIN,
            payload:payload
        }
    }
}
