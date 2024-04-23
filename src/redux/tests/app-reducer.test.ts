import {appInitializationAction, appLoadingAC, appReducer, AppReducerType} from '../reducers/app-reducer'


let startState: AppReducerType

beforeEach(() => {
    startState = {
        loading: false,
        isAppInitialized: false
    }
})

test('APP-LOADING', () => {
    const endState = appReducer(startState, appLoadingAC(true))
    expect(endState.loading).toBe(true)
})

test('appInitializationAction', () => {
        const endState = appReducer(startState, appInitializationAction())
        expect(endState.isAppInitialized).toBe(true)
    }
)