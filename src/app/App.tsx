import React, {FC, useEffect} from 'react'
import './App.css'
import {Redirect, Route} from 'react-router-dom'
import {Navbar} from '../layout/navbar/Navbar'
import {News} from '../layout/main/news/News'
import {Music} from '../layout/main/music/Music'
import {Settings} from '../layout/main/settings/Settings'
import {DialogsContainer} from '../layout/main/dialogs/DialogsContainer'
import {AppRootStateType, appSelectors, authSetUserDataTC, DispatchType} from '../redux'
import {UsersContainer} from '../layout/main/users/UsersContainer'
import {ProfileContainer} from '../layout/main/profile/ProfileContainer'
import {HeaderContainer} from '../layout/header/HeaderContainer'
import {LoginContainer} from '../layout/login/LoginContainer'
import {useSelector} from 'react-redux'
import {AppPreloader, useAppDispatch} from '../shared'

//========================================================================================

export const PATH = {
    LOGIN: '/login',
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings',
    USERS: '/users'
} as const

//========================================================================================

type AppPropsType = {
    store: any
    state: AppRootStateType
    dispatch: DispatchType
}

//========================================================================================

const App: FC<AppPropsType> = (props) => {

    const dispatch = useAppDispatch()
    const isAppInitialized = useSelector(appSelectors.isAppInitialized)

    useEffect(() => {
        dispatch(authSetUserDataTC())
    }, [])

    if (!isAppInitialized) {
        return <AppPreloader/>
    }

    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>

            {/* основные ОБЩИЕ стили тегов main => в App.css */}
            <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>

            <Route path={'/'} render={() => <Redirect to={PATH.PROFILE + '/:userId?'}/>}/>

            <Route path={PATH.PROFILE + '/:userId?'} render={() => <ProfileContainer/>}/>
            <Route path={PATH.USERS} render={() => <UsersContainer/>}/>
            <Route path={PATH.DIALOGS} render={() => <DialogsContainer/>}/>
            <Route path={PATH.NEWS} render={() => <News/>}/>
            <Route path={PATH.MUSIC} render={() => <Music/>}/>
            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
        </div>

    )
}
export default App