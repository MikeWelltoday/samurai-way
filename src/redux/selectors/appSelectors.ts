import {AppRootStateType} from '../store'

export const isAppInitialized = (state: AppRootStateType): boolean => state.appReducer.isAppInitialized


export const appSelectors = {
    isAppInitialized
}