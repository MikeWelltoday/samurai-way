//========================================================================================
// DIALOGS-REDUCER
export type {DialogsType} from './reducers/dialogs-reducer'
export type {MessagesType} from './reducers/dialogs-reducer'
export type {DialogsPageType} from './reducers/dialogs-reducer'
export type {DialogsReducerActionType} from './reducers/dialogs-reducer'
export {dialogsReducer} from './reducers/dialogs-reducer'
export {dialogsReducerUpdateNewMessageBodyAC} from './reducers/dialogs-reducer'
export {dialogsReducerAddMessageAC} from './reducers/dialogs-reducer'

//========================================================================================
// PROFILE-REDUCER
export type {PostsType} from './reducers/profile-reducer'
export type {ProfilePageType} from './reducers/profile-reducer'
export type {ProfileReducerActionType} from './reducers/profile-reducer'
export {profileReducer} from './reducers/profile-reducer'
export {profileUpdateNewPostTextAC} from './reducers/profile-reducer'
export {profileReducerAddPostAC} from './reducers/profile-reducer'
export {setUserProfile} from './reducers/profile-reducer'

//========================================================================================
// USER-REDUCER
export type {PhotosType} from './reducers/users-reducer'
export type {UsersType} from './reducers/users-reducer'
export type {UserPageType} from './reducers/users-reducer'
export type {UsersReducerActionType} from './reducers/users-reducer'
export {usersSetUsers} from './reducers/users-reducer'
export {usersFollowToggle} from './reducers/users-reducer'
export {usersSetCurrentPage} from './reducers/users-reducer'
export {usersSetTotalUsersCount} from './reducers/users-reducer'
export {usersIsFetchingToggle} from './reducers/users-reducer'
export {usersReducer} from './reducers/users-reducer'

//========================================================================================
// STORE
export type {StateType} from './store'
export type {DispatchType} from './store'
export {store} from './store'