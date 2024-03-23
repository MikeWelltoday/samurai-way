import {MyPosts} from './MyPosts'
import {AppRootStateType, profileReducerAddPostAC, profileUpdateNewPostTextAC} from '../../../../redux'
import {connect} from 'react-redux'
import {DispatchType} from '../../../../redux'

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

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)