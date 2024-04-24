export type AppReducerType = {
    loading: boolean
    isAppInitialized: boolean
}

export type AppReducerActionType = ReturnType<typeof appLoadingAC>
    | ReturnType<typeof appInitializationAction>

const initialState: AppReducerType = {
    loading: false,
    isAppInitialized: false
}

export function appLoadingAC(loading: boolean) {
    return {type: 'appReducer/LOADING', loading} as const
}

export function appInitializationAction() {
    return {type: 'appReducer/INITIALIZATION'} as const
}

export function appReducer(state: AppReducerType = initialState, action: AppReducerActionType): AppReducerType {
    switch (action.type) {

        case 'appReducer/LOADING': {
            return {...state, loading: action.loading}
        }

        case 'appReducer/INITIALIZATION': {
            return {...state, isAppInitialized: true}
        }

        default: {
            return state
        }
    }
}

