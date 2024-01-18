import React, {FC} from 'react'
import './Navbar.styles.css'


//=========================================================================================================================================================


//=========================================================================================================================================================

export const Navbar: FC = () => {
    return (
        <nav className="nav">
            <div className="nav__item">
                <a href={'#'} target={'_blank'}>Profile</a>
            </div>
            <div className="nav__item">
                <a href={'#'} target={'_blank'}>Messages</a>
            </div>
            <div className="nav__item">
                <a href={'#'} target={'_blank'}>News</a>
            </div>
            <div className="nav__item">
                <a href={'#'} target={'_blank'}>Music</a>
            </div>
            <div className="nav__item">
                <a href={'#'} target={'_blank'}>Settings</a>
            </div>

        </nav>
    )
}