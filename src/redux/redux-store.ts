import {combineReducers, createStore} from 'redux'
import {DialogsPageType, dialogsReducer, DialogsReducerActionType} from './dialogs-reducer/dialogs-reducer'
import {ProfilePageType, profileReducer, ProfileReducerActionType} from './profile-reducer/profile-reducer'
import {UserPageType, usersReducer, UsersReducerActionType} from './users-reducer/users-reducer'

//========================================================================================

export type  StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UserPageType
}

//========================================================================================

export type ActionType = ProfileReducerActionType | DialogsReducerActionType | UsersReducerActionType
export type DispatchType = (action: ActionType) => void

//========================================================================================

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store






