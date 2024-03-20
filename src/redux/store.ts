import {combineReducers, createStore} from 'redux'
import {DialogsPageType, dialogsReducer, DialogsReducerActionType} from './reducers/dialogs-reducer'
import {ProfilePageType, profileReducer, ProfileReducerActionType} from './reducers/profile-reducer'
import {UserPageType, usersReducer, UsersReducerActionType} from './reducers/users-reducer'

//========================================================================================

export type  StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UserPageType
}

//========================================================================================

type AllReducersActionType = ProfileReducerActionType | DialogsReducerActionType | UsersReducerActionType
export type DispatchType = (action: AllReducersActionType) => void

//========================================================================================

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store






