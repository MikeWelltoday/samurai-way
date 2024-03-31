//========================================================================================
// DIALOGS-REDUCER
export type {DialogsStateType} from './reducers/dialogs-reducer'
export {dialogsReducerUpdateNewMessageBodyAC} from './reducers/dialogs-reducer'
export {dialogsReducerAddMessageAC} from './reducers/dialogs-reducer'

//========================================================================================
// PROFILE-REDUCER
export type {PostsType} from './reducers/profile-reducer'
export {profileUpdateNewPostTextAC} from './reducers/profile-reducer'
export {profileReducerAddPostAC} from './reducers/profile-reducer'
export {setUserProfileAC} from './reducers/profile-reducer'
export {setStatusAC} from './reducers/profile-reducer'

//========================================================================================
// USER-REDUCER
export type {UsersType} from './reducers/users-reducer'
export {usersSetUsersAC} from './reducers/users-reducer'
export {usersFollowToggleAC} from './reducers/users-reducer'
export {usersSetCurrentPageAC} from './reducers/users-reducer'
export {usersSetTotalUsersCountAC} from './reducers/users-reducer'
export {usersIsFetchingToggleAC} from './reducers/users-reducer'

//========================================================================================
// AUTH-REDUCER
export {authSetUserDataAC} from './reducers/auth-reducer'

//========================================================================================
// STORE
export type {AppRootStateType} from './store'
export type {DispatchType} from './store'
export {store} from './store'
export {useAppDispatch} from './store'


//========================================================================================
//THUNKS
export {fetchUsersTC} from './thunks/users-thunks'
export {usersFollowToggleTC} from './thunks/users-thunks'
export {fetchUserProfileTC} from './thunks/profile-thunks'
export {authSetUserDataTC} from './thunks/auth-thunks'
export {fetchStatusProfileTC} from './thunks/profile-thunks'
