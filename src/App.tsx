import React, {FC} from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {Header} from './components/header/Header'
import {Navbar} from './components/navbar/Navbar'
import {Profile} from './components/main/profile/Profile'
import {Messages} from './components/main/messeges/Messages'
import {News} from './components/main/news/News'
import {Music} from './components/main/music/Music'
import {Settings} from './components/main/settings/Settings'
import {DataTypes} from './index'

//============================================================================================================

export const PATH = {
    PROFILE: '/profile',
    MESSAGES: '/messages',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings'
} as const

//============================================================================================================

type AppPropsType = {
    data: DataTypes
}

//============================================================================================================

const App: FC<AppPropsType> = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            {/* основные ОБЩИЕ стили тегов main => в App.css */}
            <Route path={PATH.PROFILE} render={() => <Profile postsData={props.data.postsData}/>}/>
            <Route path={PATH.MESSAGES} render={() => <Messages messagesData={props.data.messagesData}/>}/>
            <Route path={PATH.NEWS} render={() => <News/>}/>
            <Route path={PATH.MUSIC} render={() => <Music/>}/>
            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
        </div>

    )
}
export default App