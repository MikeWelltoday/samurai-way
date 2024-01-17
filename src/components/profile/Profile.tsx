import React, {FC} from 'react'
import './Profile.styles.css'


//=========================================================================================================================================================
//=> IMAGES
import profileImage from '../../assets/images/content-iamge.webp'


//=========================================================================================================================================================


//=========================================================================================================================================================


export const Profile: FC = () => {
    return (
        <main className={'content'}>
            <div className={'content__image-box'}>
                <img alt={'sry'} src={profileImage}/>
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