//========================================================================================

type AuthApiDataType = {
    id: number
    email: string
    login: string
}

export type AuthDataReducerType = {
    resultCode: number
    messages: string[]
    data: AuthApiDataType
}

//========================================================================================


const initialState = {
    id: null,
    email: null,
    login: null
}


export const authReducer(state:AuthDataReducerType = initialState, action):AuthDataReducerType {







}

//========================================================================================

function authSetUserDataAC() {
    return {type: 'AUTH-SET-USER-DATA', payloda: {}}
}








