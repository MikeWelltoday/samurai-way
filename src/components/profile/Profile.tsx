import React, {FC} from 'react'
import S from './Profile.module.css'
import {Posts} from './myPosts/Posts'


//============================================================================================================
//=> IMAGES
import profileImage from '../../assets/images/content-iamge.webp'


//============================================================================================================


//============================================================================================================


export const Profile: FC = () => {
    return (
        <main className={S.content}>
            <div className={S.imageBox}>
                <img className={'content__image'} alt={'sry'} src={profileImage}/>
            </div>
            <div>
                avatar+description
            </div>

            <Posts/>

        </main>
    )
}


