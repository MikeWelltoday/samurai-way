import {appLoadingAC, appReducer, AppReducerType} from '../reducers/app-reducer'


let startState: AppReducerType

beforeEach(() => {
    startState = {
        loading: false
    }
})

test('APP-LOADING', () => {
    const endState = appReducer(startState, appLoadingAC(true))
    expect(endState.loading).toBe(true)
})