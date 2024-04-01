export type AppReducerType = {
    loading: boolean
}

export type AppReducerActionType = ReturnType<typeof appLoadingAC>

const initialState: AppReducerType = {
    loading: false
}


export function appReducer(state: AppReducerType = initialState, action: AppReducerActionType): AppReducerType {
    switch (action.type) {

        case 'APP-LOADING': {
            return {...state, loading: action.loading}
        }

        default: {
            return state
        }
    }
}

export function appLoadingAC(loading: boolean) {
    return {type: 'APP-LOADING', loading} as const
}