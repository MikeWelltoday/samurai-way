import React, {FC} from 'react'
import S from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../App'


//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const Navbar: FC = () => {
    return (
        <nav className={S.navbar}>
            <div className={S.item}>
                <NavLink to={PATH.PROFILE} activeClassName={S.active}>Profile</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={PATH.DIALOGS} activeClassName={S.active}>Messages</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={PATH.NEWS} activeClassName={S.active}>News</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={PATH.MUSIC} activeClassName={S.active}>Music</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={PATH.SETTINGS} activeClassName={S.active}>Settings</NavLink>
            </div>
        </nav>
    )
}







