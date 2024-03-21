import {AuthApiDataType} from '../../api'
//========================================================================================

export type AuthReducerActionsType = ReturnType<typeof authSetUserDataAC>

//========================================================================================

export type AuthReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

//========================================================================================

export function authReducer(state: AuthReducerType = initialState, action: AuthReducerActionsType): AuthReducerType {

    switch (action.type) {

        case 'AUTH-SET-USER-DATA': {
            return {...state, ...action.payload.authDataFromApi, isAuth: true}
        }

        default: {
            return state
        }
    }

}

//========================================================================================

export function authSetUserDataAC(authDataFromApi: AuthApiDataType) {
    return {type: 'AUTH-SET-USER-DATA', payload: {authDataFromApi}} as const
}








