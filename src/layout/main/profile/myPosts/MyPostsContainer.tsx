import {MyPosts} from './MyPosts'
import {profileReducerAddPostAC, profileUpdateNewPostTextAC} from '../../../../redux/profile-reducer/profile-reducer'
import {connect} from 'react-redux'
import {DispatchType, StateType} from '../../../../redux/redux-store'

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

function mapStateToProps(state: StateType) {
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