import React, {FC} from 'react'
import S from './Posts.module.css'
import {Post} from './post/Post'

//============================================================================================================

type PostsData = {
    id: number
    message: string
    likesCount: number
}

//============================================================================================================

export const Posts: FC = () => {

    const postsData: PostsData[] = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It is my first post', likesCount: 3},
        {id: 3, message: 'Yo', likesCount: 1},
        {id: 4, message: 'Yo', likesCount: 5}
    ]

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
                {postsData.map(m => <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)}
            </div>

        </div>
    )
}