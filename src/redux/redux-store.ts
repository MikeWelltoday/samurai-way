import {combineReducers, createStore} from 'redux'
import {dialogsReducer} from './dialogs-reducer'
import {profileReducer} from './profile-reducer'

//========================================================================================
// 💾 .S.T.O.R.E.

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store






