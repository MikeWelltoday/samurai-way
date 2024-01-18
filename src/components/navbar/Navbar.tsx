import React, {FC} from 'react'
import S from './Navbar.module.css'


//=========================================================================================================================================================


//=========================================================================================================================================================

export const Navbar: FC = () => {
    return (
        <nav className={S.nav}>
            <div className={S.item}>
                <a href={'#'} target={'_blank'}>Profile</a>
            </div>
            <div className={S.item}>
                <a href={'#'} target={'_blank'}>Messages</a>
            </div>
            <div className={S.item}>
                <a href={'#'} target={'_blank'}>News</a>
            </div>
            <div className={S.item}>
                <a href={'#'} target={'_blank'}>Music</a>
            </div>
            <div className={S.item}>
                <a href={'#'} target={'_blank'}>Settings</a>
            </div>

        </nav>
    )
}


