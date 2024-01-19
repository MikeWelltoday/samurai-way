import React, {FC} from 'react'
import S from './Posts.module.css'
import {Post} from './post/Post'

//============================================================================================================


//============================================================================================================

export const Posts: FC = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add</button>
                <button>Remove</button>
            </div>
            <div className={S.posts}>
                <Post message={'Hi, how are you?'} likesCount={15}/>
                <Post message={'It is my first post'} likesCount={15}/>
            </div>

        </div>
    )
}