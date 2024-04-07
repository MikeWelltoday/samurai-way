import {AppThunkDispatchType} from '../store'
import {authAPI} from '../../api'
import {authSetUserDataAC, clearUserAuthDataAC, logToggleAC} from '../reducers/auth-reducer'
import {appLoadingAC} from '../reducers/app-reducer'

//========================================================================================

export const authSetUserDataTC = () => async (dispatch: AppThunkDispatchType) => {
    dispatch(appLoadingAC(true))
    try {
        const res = await authAPI.getAuth()
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
    dispatch(appLoadingAC(false))
}

export const authLoginTC = (email: string, password: number, rememberMe: boolean,
                            captcha: boolean) => async (dispatch: AppThunkDispatchType) => {
    dispatch(appLoadingAC(true))
    try {
        const res = await authAPI.loginAuth(email, password, rememberMe, captcha)
        if (res.data.resultCode === 0) {

            // если логин подошел => запрашиваем данные для аунтефикации, чтобы делать запросы
            await dispatch(authSetUserDataTC())

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
    dispatch(appLoadingAC(false))
}

export const authLogoutTC = () => async (dispatch: AppThunkDispatchType) => {
    dispatch(appLoadingAC(true))
    try {
        const res = await authAPI.logoutAuth()
        if (res.data.resultCode === 0) {
            dispatch(logToggleAC(false))
            dispatch(clearUserAuthDataAC())
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
    dispatch(appLoadingAC(false))
}