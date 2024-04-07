import {authReducer, AuthStateType, authSetUserDataAC, logToggleAC, clearUserAuthDataAC} from '../reducers/auth-reducer'

//========================================================================================

let startState: AuthStateType

beforeEach(() => {
    startState = {
        id: null,
        email: null,
        login: null,
        isAuth: false
    }
})

test('AUTH-SET-USER-DATA', () => {
    const authDataFromAPI = {
        id: 123,
        email: 'TEST-EMAIL',
        login: 'TEST-LOGIN'
    }
    const endState = authReducer(startState, authSetUserDataAC(authDataFromAPI))
    expect(endState.id).toBe(authDataFromAPI.id)
    expect(endState.email).toBe(authDataFromAPI.email)
    expect(endState.login).toBe(authDataFromAPI.login)
    expect(endState.isAuth).toBe(true)
})

test('AUTH-SET-LOG-TOGGLE', () => {
    const endState = authReducer(startState, logToggleAC(true))
    expect(endState.isAuth).toBe(true)
})

test('AUTH/CLEAR__USER__AUTH__DATA', () => {
    startState = {
        id: 123,
        email: '123',
        login: '123',
        isAuth: true
    }
    const endState = authReducer(startState, clearUserAuthDataAC())
    expect(endState).toEqual({id: null, email: null, login: null, isAuth: true})
})



