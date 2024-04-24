import {AppThunkDispatchType} from '../store'
import {
    usersFollowToggleAC,
    usersIsFetchingToggleAC,
    usersSetTotalUsersCountAC,
    usersSetUsersAC
} from '../reducers/users-reducer'
import {usersApi} from '../../api'
import {ResultCodeEnum} from '../../shared'

//========================================================================================

export const fetchUsersTC = (currentPage: number, pageSize: number) => async (dispatch: AppThunkDispatchType) => {

    dispatch(usersIsFetchingToggleAC(true))
    try {
        const res = await usersApi.getUsers(currentPage, pageSize)
        dispatch(usersSetUsersAC(res.data.items))
        dispatch(usersSetTotalUsersCountAC(res.data.totalCount))
    } catch (error) {
        console.log((error as Error).message)
    }
    dispatch(usersIsFetchingToggleAC(false))
}

export const usersFollowToggleTC = (userId: number, currentIsFollowed: boolean) => async (dispatch: AppThunkDispatchType) => {

    if (currentIsFollowed) {

        try {
            const res = await usersApi.unfollowUser(userId)
            if (res.data.resultCode === ResultCodeEnum.Success) {
                dispatch(usersFollowToggleAC(userId))
            } else {
                console.error(res.data.messages[0])
            }
        } catch (error: unknown) {
            console.error((error as Error).message)
        }

    } else {

        try {
            const res = await usersApi.followUser(userId)
            if (res.data.resultCode === 0) {
                dispatch(usersFollowToggleAC(userId))
            } else {
                console.error(res.data.messages[0])
            }
        } catch (error: unknown) {
            console.error((error as Error).message)
        }

    }
}

