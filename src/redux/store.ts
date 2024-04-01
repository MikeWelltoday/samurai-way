import {applyMiddleware, combineReducers, createStore} from 'redux'
import {dialogsReducer, DialogsReducerActionType} from './reducers/dialogs-reducer'
import {profileReducer, ProfileReducerActionType} from './reducers/profile-reducer'
import {usersReducer, UsersReducerActionType} from './reducers/users-reducer'
import {authReducer, AuthReducerActionsType} from './reducers/auth-reducer'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {useDispatch} from 'react-redux'
import {appReducer, AppReducerActionType} from './reducers/app-reducer'

//========================================================================================

export type  AppRootStateType = ReturnType<typeof rootReducer>

type AllReducersActionType =
    ProfileReducerActionType
    | DialogsReducerActionType
    | UsersReducerActionType
    | AuthReducerActionsType
    | AppReducerActionType

export type DispatchType = (action: AllReducersActionType) => void
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AllReducersActionType>

//========================================================================================

export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    appReducer
})

export const store = createStore(rootReducer, undefined, applyMiddleware(thunk))

// @ts-ignore
window.store = store






