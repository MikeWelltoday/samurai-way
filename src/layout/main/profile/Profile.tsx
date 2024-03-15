import React, {FC} from 'react'
import S from './Profile.module.css'
import {ProfileInfo} from './profileInfo/ProfileInfo'
import {MyPostsContainer} from './myPosts/MyPostsContainer'
import {UserProfileApiType} from './ProfileContainer'

//========================================================================================

type ProfilePropsType = {
    userProfile: UserProfileApiType | null
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


