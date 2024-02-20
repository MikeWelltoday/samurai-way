import React, {FC} from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {Header} from './layout/header/Header'
import {Navbar} from './layout/navbar/Navbar'
import {Profile} from './layout/main/profile/Profile'
import {Dialogs} from './layout/main/dialogs/Dialogs'
import {News} from './layout/main/news/News'
import {Music} from './layout/main/music/Music'
import {Settings} from './layout/main/settings/Settings'
import {DispatchType, StateType} from './redux/state'

//========================================================================================
// 🌈 .R.O.U.T.S.

export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings'
} as const

//========================================================================================
// 🎲 .T.Y.P.E.S.

type AppPropsType = {
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
            <Route
                path={PATH.PROFILE}
                render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}
            />
            <Route
                path={PATH.DIALOGS}
                render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}
            />
            <Route path={PATH.NEWS} render={() => <News/>}/>
            <Route path={PATH.MUSIC} render={() => <Music/>}/>
            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
        </div>

    )
}
export default App