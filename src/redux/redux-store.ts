import {combineReducers, createStore} from 'redux'
import {DialogsPageType, dialogsReducer, DialogsReducerActionType} from './dialogs-reducer'
import {ProfilePageType, profileReducer, ProfileReducerActionType} from './profile-reducer'

//========================================================================================
// 🎲 .T.Y.P.E.S. - .S.T.A.T.E.

export type  StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

//========================================================================================
// 🎲 .T.Y.P.E.S. - .R.E.D.U.C.E.R. => .D.I.S.P.A.T.C.H.

export type ActionType = ProfileReducerActionType | DialogsReducerActionType

export type DispatchType = (action: ActionType) => void

//========================================================================================
// 💾 .S.T.O.R.E.

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store






