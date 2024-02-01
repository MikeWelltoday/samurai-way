import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {Header} from './components/header/Header'
import {Navbar} from './components/navbar/Navbar'
import {Profile} from './components/main/profile/Profile'
import {Messages} from './components/main/messeges/Messages'
import {News} from './components/main/news/News'
import {Music} from './components/main/music/Music'
import {Settings} from './components/main/settings/Settings'

//============================================================================================================

export const PATH = {
    PROFILE: '/profile',
    MESSAGES: '/messages',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings'
} as const

//============================================================================================================

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            {/* основные ОБЩИЕ стили тегов main => в App.css */}
            <Route path={PATH.PROFILE} component={Profile}/>
            <Route path={PATH.MESSAGES} component={Messages}/>
            <Route path={PATH.NEWS} component={News}/>
            <Route path={PATH.MUSIC} component={Music}/>
            <Route path={PATH.SETTINGS} component={Settings}/>
        </div>

    )
}
export default App