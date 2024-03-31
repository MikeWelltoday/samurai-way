import {MyPosts} from './MyPosts'
import {AppRootStateType, profileReducerAddPostAC, profileUpdateNewPostTextAC} from '../../../../redux'
import {connect} from 'react-redux'
import {DispatchType} from '../../../../redux'
import {compose} from 'redux'
import React from 'react'

//========================================================================================

function mapStateToProps(state: AppRootStateType) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch: DispatchType) {
    return {
        updateNewPostText: (textInput: string) => dispatch(profileUpdateNewPostTextAC(textInput)),
        addPost: () => dispatch(profileReducerAddPostAC())
    }
}

export const MyPostsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts)