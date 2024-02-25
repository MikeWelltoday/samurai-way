import {combineReducers, createStore} from 'redux'
import {DialogsPageType, dialogsReducer, DialogsReducerActionType} from './dialogs-reducer/dialogs-reducer'
import {ProfilePageType, profileReducer, ProfileReducerActionType} from './profile-reducer/profile-reducer'
import {UserPageType, usersReducer, UsersReducerActionType} from './users-reducer/users-reducer'

//========================================================================================
// 🎲 .T.Y.P.E.S. - .S.T.A.T.E.

export type  StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UserPageType
}

//========================================================================================
// 🎲 .T.Y.P.E.S. - .R.E.D.U.C.E.R. => .D.I.S.P.A.T.C.H.

export type ActionType = ProfileReducerActionType | DialogsReducerActionType | UsersReducerActionType

export type DispatchType = (action: ActionType) => void

//========================================================================================
// 💾 .S.T.O.R.E.

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store






