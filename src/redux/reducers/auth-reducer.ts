import {AuthApiDataType} from '../../api/auth-api'

//========================================================================================

export type AuthReducerActionsType = ReturnType<typeof authSetUserDataAC>

//========================================================================================

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

//========================================================================================

export function authReducer(state: AuthStateType = initialState, action: AuthReducerActionsType): AuthStateType {

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








