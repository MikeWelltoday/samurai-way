import React, {FC} from 'react'
import S from './Header.module.css'


//============================================================================================================
//=> IMAGES
import headerImage from '../../assets/images/content-iamge.webp'

//============================================================================================================


//============================================================================================================

export const Header: FC = () => {
    return (
        <header className={S.header}>
            <img src={headerImage} alt={'sry'}/>
        </header>
    )
}




