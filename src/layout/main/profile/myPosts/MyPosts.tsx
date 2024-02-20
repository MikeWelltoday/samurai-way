import React, {ChangeEvent, FC} from 'react'
import S from './MyPosts.module.css'
import {Post} from './post/Post'
import {profileReducerAddPostAC, DispatchType, PostsType, profileUpdateNewPostTextAC} from '../../../../redux/state'

//========================================================================================
// ✨ .I.M.A.G.E.S.

type PostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: DispatchType
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const MyPosts: FC<PostsPropsType> = (props) => {

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        props.dispatch(profileUpdateNewPostTextAC(e.currentTarget.value))
    }

    function addPost() {
        props.dispatch(profileReducerAddPostAC())
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