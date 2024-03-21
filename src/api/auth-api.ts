import {instance} from './instance'

//========================================================================================


export const authApi = {

    getAuth() {
        return instance.get()
    }


}