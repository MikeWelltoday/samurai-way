import React, {FC} from 'react'
import S from './ProfileInfo.module.css'
import {Preloader} from '../../../../components/loader/Preloader'
import {UserProfileApiType} from '../../../../api'

//========================================================================================

import image from '../../../../assets/images/content-iamge.webp'

//========================================================================================

type ProfileInfoType = {
    userProfile: UserProfileApiType | null
}

export const ProfileInfo: FC<ProfileInfoType> = (props) => {

    if (!props.userProfile) {
        return <Preloader/>
    }

    return (
        <div className={S.profileInfo}>
            <div className={S.imageBox}>
                {props.userProfile.photos.large ?
                    <img src={props.userProfile.photos.large} alt="sry"/>
                    :
                    <img src={image} alt={'sry'}/>
                }
            </div>
            <div className={S.description}>
                Description about me...
            </div>
        </div>
    )
}