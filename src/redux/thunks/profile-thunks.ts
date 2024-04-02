import {AppThunkDispatchType} from '../store'
import {profileApi} from '../../api'
import {setStatusAC, setUserProfileAC} from '../reducers/profile-reducer'

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
        if (res.data.resultCode === 0) {
            dispatch(setStatusAC(newStatus))
        } else {
            console.error(res.data.messages[0])
        }
    } catch (error) {
        console.error((error as Error).message)
    }
}