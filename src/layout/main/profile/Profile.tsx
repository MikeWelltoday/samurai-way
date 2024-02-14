import React, {FC} from 'react'
import S from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts'
import {ProfileInfo} from './profileInfo/ProfileInfo'
import {PostsType} from '../../../index'

//============================================================================================================

type ProfilePropsType = {
    posts: PostsType[]
}

//============================================================================================================

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={S.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </main>
    )
}


