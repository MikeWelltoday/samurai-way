import React, {FC} from 'react'
import {MyPosts} from './MyPosts'
import {StoreType} from '../../../../redux/store'
import {profileReducerAddPostAC, profileUpdateNewPostTextAC} from '../../../../redux/profile-reducer'

//========================================================================================

// 🎲 .T.Y.P.E.S.
type MyPostsContainerPropsType = {
    store: StoreType
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const MyPostsContainer: FC<MyPostsContainerPropsType> = (props) => {

    const state = props.store.getState()

    function onPostChange(textInput: string) {
        props.store.dispatch(profileUpdateNewPostTextAC(textInput))
    }

    function addPost() {
        props.store.dispatch(profileReducerAddPostAC())
    }

    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            updateNewPostText={onPostChange}
            addPost={addPost}
        />
    )
}