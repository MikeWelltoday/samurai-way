import React, {FC, useEffect} from 'react'
import './App.css'
import {Redirect, Route} from 'react-router-dom'
import {Navbar} from '../layout/navbar/Navbar'
import {News} from '../layout/main/news/News'
import {Music} from '../layout/main/music/Music'
import {Settings} from '../layout/main/settings/Settings'
import {AppRootStateType, appSelectors, authSetUserDataTC, DispatchType} from '../redux'
import {HeaderContainer} from '../layout/header/HeaderContainer'
import {LoginContainer} from '../layout/login/LoginContainer'
import {useSelector} from 'react-redux'
import {AppPreloader, LazyWrapper, useAppDispatch} from '../shared'
import ProfileContainer from '../layout/main/profile/ProfileContainer'

//========================================================================================

// делаем ленивую загрузку
const DialogsContainer = React.lazy(() => import('../layout/main/dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('../layout/main/users/UsersContainer'))

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

            {/*<Route path={PATH.USERS} render={() => <UsersContainer/>}/>*/}
            <Route path={PATH.USERS}
                   render={() => <LazyWrapper component={UsersContainer} fallback={<div>LOADING</div>}/>}/>


            {/*<Route path={PATH.DIALOGS} render={() => <DialogsContainer/>}/>*/}
            <Route path={PATH.DIALOGS}
                   render={() => <LazyWrapper component={DialogsContainer} fallback={<div>LOADING</div>}/>}/>

            <Route path={PATH.NEWS} render={() => <News/>}/>

            <Route path={PATH.MUSIC} render={() => <Music/>}/>

            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
        </div>

    )
}
export default App