import React, {FC} from 'react'
import profileImage from '../../images/content-iamge.webp'

//===============================================================================================================================================================


//===============================================================================================================================================================

export const Profile: FC = () => {
    return (
        <main className={'content'}>
            <div>
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