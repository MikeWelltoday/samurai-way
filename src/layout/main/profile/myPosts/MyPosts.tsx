import React, {FC, RefObject} from 'react'
import S from './MyPosts.module.css'
import {Post} from './post/Post'
import {PostsType} from '../../../../redux/state'


//============================================================================================================

type PostsPropsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}

//============================================================================================================

export const MyPosts: FC<PostsPropsType> = (props) => {

    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    function addPost() {
        // докажем TS что узел newPostElement.current существует и не равен null | undefined при компеляции TS
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={S.myPosts}>
            <h3> #POSTS</h3>
            <div className={S.myPostsAddItem}>
                <textarea ref={newPostElement} placeholder={'make a post'}/>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={S.myPostsList}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>

        </div>
    )
}