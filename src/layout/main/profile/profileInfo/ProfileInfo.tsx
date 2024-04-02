import React, {FC} from 'react'
import S from './ProfileInfo.module.css'
import {Preloader} from '../../../../components/loader/Preloader'
import {UserProfileApiType} from '../../../../api/profile-api'
import {ProfileStatus} from './profileStatus/ProfileStatus'

//========================================================================================

import image from '../../../../assets/images/content-iamge.webp'

//========================================================================================

type ProfileInfoType = {
    userProfile: UserProfileApiType | null
    profileStatus: string
    isStatusChangeable: boolean
    updateStatus: (newStatus: string) => void
}

export const ProfileInfo: FC<ProfileInfoType> = (props) => {

    if (!props.userProfile) {
        return (
            <div className={S.preloaderContainer}>
                <Preloader/>
            </div>

        )
    }

    return (
        <div className={S.profileInfo}>
            <div className={S.imageBox}>
                {props.userProfile?.photos.large ?
                    <img src={props.userProfile.photos.large} alt="sry"/>
                    :
                    <img src={image} alt={'sry'}/>
                }
            </div>
            <div className={S.profileStatusContainer}>
                <ProfileStatus
                    status={props.profileStatus}
                    updateStatus={props.updateStatus}
                    isStatusChangeable={props.isStatusChangeable}
                />
            </div>
            <div className={S.description}>
                Description about me...
            </div>
        </div>
    )
}