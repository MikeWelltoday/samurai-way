import React, {ComponentType} from 'react'
import {AppRootStateType} from '../redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

//========================================================================================

type MapStateToPropsType = {
    isAuth: boolean
}

//========================================================================================
export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}

