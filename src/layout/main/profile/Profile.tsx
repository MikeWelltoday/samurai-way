import React, {FC} from 'react'
import S from './Profile.module.css'
import {ProfileInfo} from './profileInfo/ProfileInfo'
import {MyPostsContainer} from './myPosts/MyPostsContainer'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type ProfilePropsType = {}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={S.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    )
}


