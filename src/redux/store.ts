import {applyMiddleware, combineReducers, compose, createStore, Store} from 'redux'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {dialogsReducer, DialogsReducerActionType} from './reducers/dialogs-reducer'
import {profileReducer, ProfileReducerActionType} from './reducers/profile-reducer'
import {usersReducer, UsersReducerActionType} from './reducers/users-reducer'
import {authReducer, AuthReducerActionsType} from './reducers/auth-reducer'
import {appReducer, AppReducerActionType} from './reducers/app-reducer'
import {composeWithDevTools} from 'redux-devtools-extension'


export type  AppRootStateType = ReturnType<typeof rootReducer>

type AllReducersActionType =
    ProfileReducerActionType
    | DialogsReducerActionType
    | UsersReducerActionType
    | AuthReducerActionsType
    | AppReducerActionType

export type DispatchType = (action: AllReducersActionType) => void
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AllReducersActionType>


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    appReducer
})

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose

export const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

// @ts-ignore
window.store = store






