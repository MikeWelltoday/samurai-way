import {combineReducers, createStore} from 'redux'
import {dialogsReducer, DialogsReducerActionType} from './reducers/dialogs-reducer'
import {profileReducer, ProfileReducerActionType} from './reducers/profile-reducer'
import {usersReducer, UsersReducerActionType} from './reducers/users-reducer'
import {authReducer, AuthReducerActionsType} from './reducers/auth-reducer'

//========================================================================================

type AllReducersActionType =
    ProfileReducerActionType
    | DialogsReducerActionType
    | UsersReducerActionType
    | AuthReducerActionsType

export type DispatchType = (action: AllReducersActionType) => void

export type  AppRootStateType = ReturnType<typeof rootReducer>

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






