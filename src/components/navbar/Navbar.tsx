import React, {FC} from 'react'

//===============================================================================================================================================================


//===============================================================================================================================================================

export const Navbar: FC = () => {
    return (
        <nav className={'nav'}>
            <div>
                <a href={'#'} target={'_blank'}>Profile</a>
            </div>
            <div>
                <a href={'#'} target={'_blank'}>Messages</a>
            </div>
            <div>
                <a href={'#'} target={'_blank'}>News</a>
            </div>
            <div>
                <a href={'#'} target={'_blank'}>Music</a>
            </div>
            <div>
                <a href={'#'} target={'_blank'}>Settings</a>
            </div>

        </nav>
    )
}