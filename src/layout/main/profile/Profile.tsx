import React, {FC} from 'react'
import S from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts'
import {ProfileInfo} from './profileInfo/ProfileInfo'
import {DispatchType, ProfilePageType} from '../../../redux/store'
import {MyPostsContainer} from './myPosts/MyPostsContainer'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type ProfilePropsType = {
    store: any
    profilePage: ProfilePageType
    dispatch: DispatchType
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={S.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
}


