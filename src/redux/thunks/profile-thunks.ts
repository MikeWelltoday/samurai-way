import {AppRootStateType, AppThunkDispatchType} from '../store'
import {profileApi} from '../../api'
import {changeProfileAction, setStatusAC, setUserProfileAC} from '../reducers/profile-reducer'
import {ResultCodeEnum} from '../../shared'
import {ModelToUpdateType, UserProfileApiType} from '../../api/profile-api'
import {appLoadingAC} from '../reducers/app-reducer'

//========================================================================================

export const fetchUserProfileTC = (userID: string) => async (dispatch: AppThunkDispatchType) => {
    try {
        const res = await profileApi.getUserProfile(userID)
        dispatch(setUserProfileAC(res.data))
    } catch (error) {
        console.error((error as Error).message)
    }
}

export const fetchStatusProfileTC = (userID: string) => async (dispatch: AppThunkDispatchType) => {
    try {
        const res = await profileApi.getUserProfileStatus(userID)
        dispatch(setStatusAC(res.data))
    } catch (error) {
        console.error((error as Error).message)
    }
}

export const updateStatusTC = (newStatus: string) => async (dispatch: AppThunkDispatchType) => {
    try {
        dispatch(setStatusAC('🚀 LOADING 🛸'))
        const res = await profileApi.statusUpdate(newStatus)
        if (res.data.resultCode === ResultCodeEnum.Success) {
            dispatch(setStatusAC(newStatus))
        } else {
            console.error(res.data.messages[0])
        }
    } catch (error) {
        console.error((error as Error).message)
    }
}

export const changeProfileThunk = (modelToUpdate: ModelToUpdateType) => async (dispatch: AppThunkDispatchType, getState: () => AppRootStateType) => {
    dispatch(appLoadingAC(true))
    try {
        const res = await profileApi.updateProfile(modelToUpdate)

        if (res.data.resultCode === ResultCodeEnum.Success) {
            const profile: UserProfileApiType = {
                ...getState().profilePage.userProfile,
                ...res.data.data
            }
            dispatch(changeProfileAction(profile))
        } else {
            console.error(res.data.messages[0])
        }
    } catch (error) {
        console.error((error as Error).message)
    }
    dispatch(appLoadingAC(false))
}