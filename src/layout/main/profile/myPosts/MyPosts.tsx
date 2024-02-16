import React, {ChangeEvent, FC} from 'react'
import S from './MyPosts.module.css'
import {Post} from './post/Post'
import {addPostAC, DispatchType, PostsType, updateNewPostTextAC} from '../../../../redux/state'


//============================================================================================================

type PostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: DispatchType
}

//============================================================================================================

export const MyPosts: FC<PostsPropsType> = (props) => {

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    function addPost() {
        props.dispatch(addPostAC())
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
                    <button onClick={addPost}>add post</button>
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