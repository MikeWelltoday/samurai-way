import {instance} from './instance'

//========================================================================================

export type AuthApiDataType = {
    id: number
    email: string
    login: string
}

export type LoginResponseType = {
    userId: number
}

export type AxiosContainerResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

//========================================================================================


export const authAPI = {

    getAuth() {
        return instance.get<AxiosContainerResponseType<AuthApiDataType>>('auth/me')
    },

    loginAuth(email: string, password: number, rememberMe: boolean, captcha: boolean) {
        return instance.post<AxiosContainerResponseType<LoginResponseType>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        })
    },

    logoutAuth() {
        return instance.delete<AxiosContainerResponseType>('auth/login')
    }


}