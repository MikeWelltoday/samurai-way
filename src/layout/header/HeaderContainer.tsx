import React from 'react'
import {connect} from 'react-redux'
import {AppRootStateType, authSetUserDataTC} from '../../redux'
import {Header} from './Header'

//========================================================================================

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    authSetUserDataTC: () => void
}

type HeaderApiContainerType = MapStateToPropsType & MapDispatchToPropsType

//========================================================================================


export class HeaderApiContainer extends React.Component<HeaderApiContainerType> {

    componentDidMount() {
        this.props.authSetUserDataTC()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

//========================================================================================


function mapStateToProps(state: AppRootStateType) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = {
    authSetUserDataTC
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApiContainer)