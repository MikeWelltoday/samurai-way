import React, {FC, memo} from 'react'
import S from './MyPosts.module.css'
import {Post} from './post/Post'
import {PostsType} from '../../../../redux'
import {PostForm} from './postForm/PostForm'

//========================================================================================

type PostsPropsType = {
    posts: PostsType[]
    profileReducerAddPostAC: (message: string) => void
}

//========================================================================================

export const MyPosts: FC<PostsPropsType> = memo((props) => {


    return (
        <div className={S.myPosts}>

            <h3> #POSTS</h3>

            <PostForm profileReducerAddPostAC={props.profileReducerAddPostAC}/>

            <div className={S.myPostsList}>
                {props.posts.map(post => (
                    <Post
                        key={post.id}
                        message={post.message}
                        likesCount={post.likesCount}
                    />
                ))}
            </div>

        </div>
    )
})