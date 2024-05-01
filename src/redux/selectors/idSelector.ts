import {AppRootStateType} from '../store'


export const idSelector = (state: AppRootStateType): number => state.auth.id as number