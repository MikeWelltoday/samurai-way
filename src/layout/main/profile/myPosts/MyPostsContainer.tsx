import {MyPosts} from './MyPosts'
import {AppRootStateType, profileReducerAddPostAC} from '../../../../redux'
import {connect} from 'react-redux'
import {compose} from 'redux'
import React from 'react'

//========================================================================================

function mapStateToProps(state: AppRootStateType) {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = {
    profileReducerAddPostAC
}

export const MyPostsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts)