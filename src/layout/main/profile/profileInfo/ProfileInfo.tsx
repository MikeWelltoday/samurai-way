import React from 'react'
import S from './ProfileInfo.module.css'

//============================================================================================================
//=> IMAGES
import image from '../../../../assets/images/content-iamge.webp'


//============================================================================================================

export const ProfileInfo = () => {
    return (
        <div className={S.profileInfo}>
            <div className={S.imageBox}>
                <img src={image} alt={'sry'}/>
            </div>
            <div className={S.description}>
                Description about me...
            </div>
        </div>

    )
}