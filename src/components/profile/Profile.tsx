import React, {FC} from 'react'
import S from './Profile.module.css'


//=========================================================================================================================================================
//=> IMAGES
import profileImage from '../../assets/images/content-iamge.webp'


//=========================================================================================================================================================


//=========================================================================================================================================================


export const Profile: FC = () => {
    return (
        <main className={S.content}>
            <div className={S.imageBox}>
                <img className={'content__image'} alt={'sry'} src={profileImage}/>
            </div>
            <div>
                avatar+description
            </div>
            <div>
                my posts
                <div>
                    New Post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>

        </main>
    )
}


