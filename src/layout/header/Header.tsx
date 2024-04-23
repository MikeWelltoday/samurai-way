import React, {FC} from 'react'
import S from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {LoadingBar} from '../../shared/ui/loadingBar/LoadingBar'

//========================================================================================

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    isLoading: boolean
    authLogoutTC: () => void
}

//========================================================================================

export const Header: FC<HeaderPropsType> = (props) => {

    function logoutHandler() {
        props.authLogoutTC()
    }

    return (
        <header className={S.header}>
            <div className={S.content}>
                <div className={S.loginContainer}>
                    {props.isAuth ? <span onClick={logoutHandler}>LOGOUT</span>
                        : <NavLink to={'/login'}>LOGIN</NavLink>}
                </div>
                <p>✈ SOCIAL NETWORK</p>
            </div>
            {props.isLoading && <LoadingBar/>}
        </header>
    )
}




