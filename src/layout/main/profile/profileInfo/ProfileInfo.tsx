import React, {FC} from 'react'
import S from './ProfileInfo.module.css'
import {Loader} from '../../../../shared/ui/loader/Loader'
import {UserProfileApiType} from '../../../../api/profile-api'
import {ProfileStatus} from './profileStatus/ProfileStatus'

//========================================================================================

import image from '../../../../assets/images/content-iamge.webp'
import {EditableSpan} from '../../../../shared'

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
                <Loader/>
            </div>

        )
    }

    console.log(props.isStatusChangeable)

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

                <div>
                    <span>🟣 My name is </span>
                    <EditableSpan value={props.userProfile.fullName}
                                  isAbleToBeEdited={props.isStatusChangeable}
                                  updateCallBackFnc={(newValue: string) => {
                                  }}
                    />.
                </div>

                <div>
                    <span>🟣 Do i look for a job? I think </span>
                    <EditableSpan value={props.userProfile.lookingForAJob.toString()}
                                  isAbleToBeEdited={props.isStatusChangeable}
                                  updateCallBackFnc={(newValue: string) => {
                                  }}
                    />.
                </div>

            </div>

        </div>
    )
}