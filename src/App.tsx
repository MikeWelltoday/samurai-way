import React from 'react'
import './App.css'
import {Header} from './components/header/Header'
import {Navbar} from './components/navbar/Navbar'
import {Profile} from './components/profile/Profile'
import {Dialogs} from './components/dialogs/Dialogs'

//============================================================================================================


//============================================================================================================

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            {/* основные ОБЩИЕ стили тегов main оставил в App.css */}

            {/*<Profile/>*/}
            <Dialogs/>

        </div>
    )
}
export default App