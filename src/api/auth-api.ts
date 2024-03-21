import {instance} from './instance'

//========================================================================================
export type AuthApiDataType = {
    id: number
    email: string
    login: string
}

type AuthDataReducerType = {
    resultCode: number
    messages: string[]
    data: AuthApiDataType
}

//========================================================================================


export const authApi = {

    getAuth() {
        return instance.get<AuthDataReducerType>('/auth/me')
    }
}