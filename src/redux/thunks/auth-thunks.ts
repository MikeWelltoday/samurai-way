import {AppThunkDispatchType} from '../store'
import {authApi} from '../api/auth-api'
import {authSetUserDataAC} from '../reducers/auth-reducer'

//========================================================================================

export const authSetUserDataTC = () => async (dispatch: AppThunkDispatchType) => {
    try {
        const res = await authApi.getAuth()
        if (res.data.resultCode === 0) {
            dispatch(authSetUserDataAC(res.data.data))
        } else {
            if (res.data.messages[1]) {
                console.error(res.data.messages[1])
            } else {
                console.error('ERROR')
            }
        }
    } catch (error) {
        console.error((error as Error).message)
    }
}