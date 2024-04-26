//========================================================================================
// DIALOGS-REDUCER
export type {DialogsStateType} from './reducers/dialogs-reducer'
export {dialogsReducerAddMessageAC} from './reducers/dialogs-reducer'

//========================================================================================
// PROFILE-REDUCER
export type {PostsType} from './reducers/profile-reducer'
export {profileReducerAddPostAC} from './reducers/profile-reducer'
export {setUserProfileAC} from './reducers/profile-reducer'
export {setStatusAC} from './reducers/profile-reducer'

//========================================================================================
// USER-REDUCER
export type {UsersType} from './reducers/users-reducer'
export {
    usersSetUsersAC,
    usersIsFetchingToggleAC,
    usersFollowToggleAC,
    usersSetTotalUsersCountAC,
    usersSetCurrentPageAC
} from './reducers/users-reducer'

//========================================================================================
// APP
export {
    appLoadingAC,
    appInitializationAction
} from './reducers/app-reducer'


//========================================================================================
// AUTH-REDUCER
export {authSetUserDataAC} from './reducers/auth-reducer'
export {logToggleAC} from './reducers/auth-reducer'
export {clearUserAuthDataAC} from './reducers/auth-reducer'

// STORE
export type {AppRootStateType} from './store'
export type {DispatchType} from './store'
export {store} from './store'

//THUNKS
export {fetchUsersTC} from './thunks/users-thunks'
export {usersFollowToggleTC} from './thunks/users-thunks'
export {fetchUserProfileTC} from './thunks/profile-thunks'
export {authSetUserDataTC} from './thunks/auth-thunks'
export {fetchStatusProfileTC} from './thunks/profile-thunks'
export {authLoginTC} from './thunks/auth-thunks'
export {authLogoutTC} from './thunks/auth-thunks'

// selectors
export {appSelectors} from './selectors/appSelectors'
export {usersSelectors} from './selectors/usersSelectors'
export {profileDescriptionSelector} from './selectors/profileDescriptionSelector'
