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
import {AddPostFunctionType, StateType, UpdateNewPostTextFunctionType} from './redux/state'

//=============================================================================

export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings'
} as const

//=============================================================================

type AppPropsType = {
    state: StateType
    addPost: AddPostFunctionType
    updateNewPostText: UpdateNewPostTextFunctionType
}

//=============================================================================

const App: FC<AppPropsType> = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            {/* основные ОБЩИЕ стили тегов main => в App.css */}
            <Route path={PATH.PROFILE}
                   render={() =>
                       <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                       />}
            />
            <Route path={PATH.DIALOGS} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
            <Route path={PATH.NEWS} render={() => <News/>}/>
            <Route path={PATH.MUSIC} render={() => <Music/>}/>
            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
        </div>

    )
}
export default App