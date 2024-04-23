import React from 'react'
import {connect} from 'react-redux'
import {AppRootStateType, authLoginTC} from '../../redux'
import {compose} from 'redux'
import {Login} from './Login'
import {Redirect} from 'react-router-dom'
import {PATH} from '../../app/App'
import {AxiosContainerResponseType, LoginResponseType} from '../../api/auth-api'

//========================================================================================

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    authLoginTC: (email: string, password: number, rememberMe: boolean, captcha: boolean) => Promise<AxiosContainerResponseType<LoginResponseType>>
}

type HeaderApiContainerType = MapStateToPropsType & MapDispatchToPropsType

//========================================================================================


export class LoginApiContainer extends React.Component<HeaderApiContainerType> {

    componentDidMount() {

    }

    render() {

        if (this.props.isAuth) return <Redirect to={PATH.PROFILE}/>

        return <Login authLoginTC={this.props.authLoginTC} isAuth={this.props.isAuth}/>
    }
}

//========================================================================================


function mapStateToProps(state: AppRootStateType) {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = {
    authLoginTC
}

export const LoginContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)
(LoginApiContainer)