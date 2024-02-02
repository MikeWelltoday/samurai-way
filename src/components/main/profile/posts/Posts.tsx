import React, {FC} from 'react'
import S from './Posts.module.css'
import {Post} from './post/Post'
import {PostsDataType} from '../../../../index'

//============================================================================================================

type PostsPropsType = {
    postsData: PostsDataType[]
}

//============================================================================================================

export const Posts: FC<PostsPropsType> = (props) => {

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
                {props.postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>

        </div>
    )
}