import {AppThunkDispatchType} from '../store'
import {profileApi} from '../api/profile-api'
import {setUserProfileAC} from '../reducers/profile-reducer'

//========================================================================================

export const fetchUserProfileTC = (userID: string) => async (dispatch: AppThunkDispatchType) => {

    try {
        const res = await profileApi.getUserProfile(userID)
        dispatch(setUserProfileAC(res.data))
    } catch (error) {
        console.error((error as Error).message)
    }
}