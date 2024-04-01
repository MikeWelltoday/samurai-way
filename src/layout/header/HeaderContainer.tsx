import React from 'react'
import {connect} from 'react-redux'
import {AppRootStateType, authLogoutTC, authSetUserDataTC} from '../../redux'
import {Header} from './Header'
import {compose} from 'redux'

//========================================================================================

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    isLoading: boolean
}

type MapDispatchToPropsType = {
    authSetUserDataTC: () => void
    authLogoutTC: () => void
}

type HeaderApiContainerType = MapStateToPropsType & MapDispatchToPropsType

//========================================================================================


export class HeaderApiContainer extends React.Component<HeaderApiContainerType> {

    componentDidMount() {
        this.props.authSetUserDataTC()
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                isLoading={this.props.isLoading}
                authLogoutTC={this.props.authLogoutTC}
            />)
    }
}

//========================================================================================


function mapStateToProps(state: AppRootStateType) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isLoading: state.appReducer.loading
    }
}

const mapDispatchToProps = {
    authSetUserDataTC,
    authLogoutTC
}

export const HeaderContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)
(HeaderApiContainer)