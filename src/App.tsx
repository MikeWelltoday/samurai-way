import React, {FC} from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {Header} from './layout/header/Header'
import {Navbar} from './layout/navbar/Navbar'
import {Profile} from './layout/main/profile/Profile'
import {News} from './layout/main/news/News'
import {Music} from './layout/main/music/Music'
import {Settings} from './layout/main/settings/Settings'
import {DialogsContainer} from './layout/main/dialogs/DialogsContainer'
import {DispatchType, StateType} from './redux/redux-store'
import {UsersContainer} from './layout/main/users/UsersContainer'
import {Users} from './layout/main/users/Users'

//========================================================================================
// 🌈 .R.O.U.T.S.

export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings',
    USERS: '/users'
} as const

//========================================================================================
// 🎲 .T.Y.P.E.S.

type AppPropsType = {
    store: any
    state: StateType
    dispatch: DispatchType
}

//========================================================================================
// 🍇 .A.P.P.

const App: FC<AppPropsType> = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            {/* основные ОБЩИЕ стили тегов main => в App.css */}
            <Route path={PATH.PROFILE} render={() => <Profile/>}/>
            <Route path={PATH.DIALOGS} render={() => <DialogsContainer/>}/>
            <Route path={PATH.NEWS} render={() => <News/>}/>
            <Route path={PATH.MUSIC} render={() => <Music/>}/>
            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>

            <Route path={PATH.USERS} render={() => <UsersContainer/>}/>
        </div>

    )
}
export default App