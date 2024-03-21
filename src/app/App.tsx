import React, {FC} from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {Navbar} from '../layout/navbar/Navbar'
import {News} from '../layout/main/news/News'
import {Music} from '../layout/main/music/Music'
import {Settings} from '../layout/main/settings/Settings'
import {DialogsContainer} from '../layout/main/dialogs/DialogsContainer'
import {DispatchType, StateType} from '../redux'
import {UsersContainer} from '../layout/main/users/UsersContainer'
import {ProfileContainer} from '../layout/main/profile/ProfileContainer'
import {HeaderComponent} from '../layout/header/HeaderContainer'

//========================================================================================

export const PATH = {
    PROFILE: '/profile/:userId',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings',
    USERS: '/users'
} as const

//========================================================================================

type AppPropsType = {
    store: any
    state: StateType
    dispatch: DispatchType
}

//========================================================================================

const App: FC<AppPropsType> = (props) => {

    return (

        <div className="app-wrapper">
            <HeaderComponent/>
            <Navbar/>

            {/* основные ОБЩИЕ стили тегов main => в App.css */}
            <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
            <Route path={PATH.DIALOGS} render={() => <DialogsContainer/>}/>
            <Route path={PATH.NEWS} render={() => <News/>}/>
            <Route path={PATH.MUSIC} render={() => <Music/>}/>
            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>

            <Route path={PATH.USERS} render={() => <UsersContainer/>}/>
        </div>

    )
}
export default App