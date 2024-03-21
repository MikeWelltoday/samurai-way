import React, {FC} from 'react'
import S from './Header.module.css'
import {NavLink} from 'react-router-dom'

//========================================================================================

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

//========================================================================================

export const Header: FC<HeaderPropsType> = (props) => {
    return (
        <header className={S.header}>
            <div className={S.loginContainer}>
                {props.isAuth ? `${props.login}` : <NavLink to={'/login'}>LOGIN</NavLink>}

            </div>
            <p>✈ SOCIAL NETWORK</p>
        </header>
    )
}




