import {combineReducers, createStore} from 'redux'
import {DialogsPageType, dialogsReducer, DialogsReducerActionType} from './reducers/dialogs-reducer'
import {ProfilePageType, profileReducer, ProfileReducerActionType} from './reducers/profile-reducer'
import {UserPageType, usersReducer, UsersReducerActionType} from './reducers/users-reducer'
import {authReducer, AuthReducerActionsType, AuthReducerType} from './reducers/auth-reducer'

//========================================================================================

export type  StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UserPageType
    auth: AuthReducerType
}

//========================================================================================

type AllReducersActionType =
    ProfileReducerActionType
    | DialogsReducerActionType
    | UsersReducerActionType
    | AuthReducerActionsType

export type DispatchType = (action: AllReducersActionType) => void

//========================================================================================

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store






