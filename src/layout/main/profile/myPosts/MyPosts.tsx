import React, {ChangeEvent, FC, RefObject} from 'react'
import S from './MyPosts.module.css'
import {Post} from './post/Post'
import {AddPostFunctionType, PostsType, UpdateNewPostTextType} from '../../../../redux/state'


//============================================================================================================

type PostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: AddPostFunctionType
    updateNewPostText: UpdateNewPostTextType
}

//============================================================================================================

export const MyPosts: FC<PostsPropsType> = (props) => {

    // const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

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
                    // ref={newPostElement}
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