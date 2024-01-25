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

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            {/* основные ОБЩИЕ стили тегов main => в App.css */}
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={Messages}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
        </div>

    )
}
export default App