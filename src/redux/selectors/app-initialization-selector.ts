import {AppRootStateType} from '../store'

export const appInitializationSelector = (state: AppRootStateType): boolean => state.appReducer.isAppInitialized
