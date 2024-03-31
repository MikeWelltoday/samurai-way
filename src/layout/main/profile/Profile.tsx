import React, {FC} from 'react'
import S from './Profile.module.css'
import {ProfileInfo} from './profileInfo/ProfileInfo'
import {MyPostsContainer} from './myPosts/MyPostsContainer'
import {UserProfileApiType} from '../../../api/profile-api'

//========================================================================================

type ProfilePropsType = {
    userProfile: UserProfileApiType | null
    profileStatus: string
    isStatusChangeable: boolean
    updateStatus: (newStatus: string) => void
}

//========================================================================================

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={S.profile}>
            <ProfileInfo
                userProfile={props.userProfile}
                profileStatus={props.profileStatus}
                isStatusChangeable={props.isStatusChangeable}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </main>
    )
}


