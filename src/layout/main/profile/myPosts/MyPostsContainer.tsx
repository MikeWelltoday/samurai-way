import React, {FC} from 'react'
import {MyPosts} from './MyPosts'
import {StoreType} from '../../../../redux/store'
import {profileReducerAddPostAC, profileUpdateNewPostTextAC} from '../../../../redux/profile-reducer'
import {StoreContext} from '../../../../StoreContext'

//========================================================================================

// 🎲 .T.Y.P.E.S.
type MyPostsContainerPropsType = {}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const MyPostsContainer: FC<MyPostsContainerPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                const state = store.getState()

                function onPostChange(textInput: string) {
                    store.dispatch(profileUpdateNewPostTextAC(textInput))
                }

                function addPost() {
                    store.dispatch(profileReducerAddPostAC())
                }

                return (
                    <MyPosts
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                    />
                )
            }}
        </StoreContext.Consumer>


    )
}