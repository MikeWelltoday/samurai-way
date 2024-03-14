import React, {FC} from 'react'
import S from './Profile.module.css'
import {ProfileInfo} from './profileInfo/ProfileInfo'
import {MyPostsContainer} from './myPosts/MyPostsContainer'
import {UserProfileType} from '../../../redux/profile-reducer/profile-reducer'

//========================================================================================

type ProfilePropsType = {
    userProfile: UserProfileType
}

//========================================================================================

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={S.profile}>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </main>
    )
}


