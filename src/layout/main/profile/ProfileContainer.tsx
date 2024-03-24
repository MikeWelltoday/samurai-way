import React from 'react'
import {Profile} from './Profile'
import {AppRootStateType, fetchUserProfileTC} from '../../../redux'
import {connect} from 'react-redux'
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom'
import {UserProfileApiType} from '../../../redux/api/profile-api'
import {PATH} from '../../../app/App'

//========================================================================================
// connect props

type MapStateToPropsType = {
    userProfile: UserProfileApiType | null
    isAuth: boolean

}

type MapDispatchToProps = {
    fetchUserProfileTC: (userID: string) => void
}

type ProfileApiContainerPropsType = MapStateToPropsType & MapDispatchToProps

//========================================================================================
// пропсы withRouter
type PathParamsType = {
    userId: string
}

//========================================================================================
// бщие пропсы

type PropsType = RouteComponentProps<PathParamsType> & ProfileApiContainerPropsType

//========================================================================================

export class ProfileApiContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (userId === ':userId') {
            userId = '30801'
        }

        this.props.fetchUserProfileTC(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={PATH.LOGIN}/>

        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }
}

//========================================================================================

// цепочка компонент
// ProfileContainer => WithUrlDataContainerComponent => ProfileApiContainer

// контейнерная компонента
// @ts-ignore
let WithUrlDataContainerComponent = withRouter(ProfileApiContainer)

//========================================================================================

function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps: MapDispatchToProps = {
    fetchUserProfileTC
}

export const ProfileContainer = connect(mapStateToProps,
    mapDispatchToProps)(WithUrlDataContainerComponent)










