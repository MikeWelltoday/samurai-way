import React, {FC} from 'react'
import S from './ProfileInfo.module.css'
import {UserProfileType} from '../../../../redux/profile-reducer/profile-reducer'

//========================================================================================

import image from '../../../../assets/images/content-iamge.webp'

//========================================================================================

type ProfileInfoType = {
    userProfile: UserProfileType
}

export const ProfileInfo: FC<ProfileInfoType> = (props) => {
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