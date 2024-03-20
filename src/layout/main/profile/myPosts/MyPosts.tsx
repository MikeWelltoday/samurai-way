import React, {ChangeEvent, FC} from 'react'
import S from './MyPosts.module.css'
import {Post} from './post/Post'
import {PostsType} from '../../../../redux'

//========================================================================================

type PostsPropsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (inputText: string) => void
    addPost: () => void
}

//========================================================================================

export const MyPosts: FC<PostsPropsType> = (props) => {

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={S.myPosts}>
            <h3> #POSTS</h3>
            <div className={S.myPostsAddItem}>
                <textarea
                    value={props.newPostText}
                    onChange={onPostChange}
                    placeholder={'make a post'}
                />
                <div>
                    <button onClick={props.addPost}>add post</button>
                </div>
            </div>
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
}