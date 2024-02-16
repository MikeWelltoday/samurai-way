import React, {FC} from 'react'
import S from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts'
import {ProfileInfo} from './profileInfo/ProfileInfo'
import {AddPostFunctionType, ProfilePageType, UpdateNewPostTextFunctionType} from '../../../redux/state'

//============================================================================================================

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: AddPostFunctionType
    updateNewPostText: UpdateNewPostTextFunctionType
}

//============================================================================================================

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={S.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </main>
    )
}


