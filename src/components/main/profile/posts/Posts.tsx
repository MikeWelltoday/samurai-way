import React, {FC} from 'react'
import S from './Posts.module.css'
import {Post} from './post/Post'

//============================================================================================================


//============================================================================================================

export const Posts: FC = () => {
    return (
        <div className={S.posts}>
            <h3> #POSTS</h3>
            <div className={S.postsAddItem}>
                <textarea placeholder={'make a post'}/>
                <div>
                    <button>add</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={S.postsList}>
                <Post message={'Hi, how are you?'} likesCount={15}/>
                <Post message={'It is my first post'} likesCount={15}/>
            </div>

        </div>
    )
}