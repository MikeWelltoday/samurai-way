import React, {FC} from 'react'
import S from './MyPosts.module.css'
import {Post} from './post/Post'
import {PostsType} from '../../../../index'

//============================================================================================================

type PostsPropsType = {
    posts: PostsType[]
}

//============================================================================================================

export const MyPosts: FC<PostsPropsType> = (props) => {

    return (
        <div className={S.myPosts}>
            <h3> #POSTS</h3>
            <div className={S.myPostsAddItem}>
                <textarea placeholder={'make a post'}/>
                <div>
                    <button>add</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={S.myPostsList}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>

        </div>
    )
}