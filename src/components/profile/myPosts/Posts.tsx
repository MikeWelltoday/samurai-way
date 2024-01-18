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
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    )
}