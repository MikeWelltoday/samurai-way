import React, {FC} from 'react'
import S from './Profile.module.css'
import {Posts} from './posts/Posts'
import {About} from './about/About'
import {PostsDataType} from '../../../index'

//============================================================================================================

type ProfilePropsType = {
    postsData: PostsDataType[]
}

//============================================================================================================

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={S.profile}>
            <About/>
            <Posts postsData={props.postsData}/>
        </main>
    )
}


