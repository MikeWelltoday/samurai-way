import React from 'react'
import {connect} from 'react-redux'
import {authSetUserDataAC, StateType} from '../../redux'
import {Header} from './Header'
import {authApi, AuthApiDataType} from '../../api/auth-api'

//========================================================================================

type HeaderApiContainerType = {
    isAuth: boolean
    login: string | null
    authSetUserDataAC: (authDataFromApi: AuthApiDataType) => void
}

//========================================================================================


export class HeaderApiContainer extends React.Component<HeaderApiContainerType> {

    componentDidMount() {
        authApi
            .getAuth()
            .then(res => {
                    if (res.data.resultCode === 0) {
                        this.props.authSetUserDataAC(res.data.data)
                    }
                }
            )
    }


    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

//========================================================================================


function mapStateToProps(state: StateType) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

}

export const HeaderComponent = connect(mapStateToProps, {authSetUserDataAC})(HeaderApiContainer)