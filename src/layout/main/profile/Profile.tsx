import React, {FC} from 'react'
import S from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts'
import {ProfileInfo} from './profileInfo/ProfileInfo'
import {DispatchType, ProfilePageType} from '../../../redux/state'

//============================================================================================================

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: DispatchType
}

//============================================================================================================

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={S.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </main>
    )
}


