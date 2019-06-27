import { LoginActionInterface, LOGIN } from "./user.type";

interface ILoginForm {
    userName:string,
    password:string,
    vmaToken:string,

}
export default {
    login(payload:ILoginForm):LoginActionInterface{
        return {
            type: LOGIN,
            payload:payload
        }
    }
}
