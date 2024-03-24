import React from 'react'
import {Profile} from './Profile'
import {AppRootStateType, fetchUserProfileTC, profileApi, setUserProfileAC} from '../../../redux'
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {UserProfileApiType} from '../../../redux/api/profile-api'

//========================================================================================
// connect props

type MapStateToPropsType = {
    userProfile: UserProfileApiType | null
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
        userProfile: state.profilePage.userProfile
    }
}

const mapDispatchToProps = {
    fetchUserProfileTC
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)










