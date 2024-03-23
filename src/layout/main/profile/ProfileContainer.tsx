import React from 'react'
import {Profile} from './Profile'
import {AppRootStateType, profileApi, setUserProfileAC} from '../../../redux'
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {UserProfileApiType} from '../../../redux/api/profile-api'

//========================================================================================
// connect props

type MapStateToPropsType = {
    userProfile: UserProfileApiType | null
}

type MapDispatchToProps = {
    setUserProfile: (user: UserProfileApiType) => void
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

        profileApi
            .getUserProfile(userId)
            .then(res => this.props.setUserProfile(res.data))
    }

    render() {
        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }
}

//========================================================================================

function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        userProfile: state.profilePage.userProfile
    }
}

// контейнерная компонента

// @ts-ignore
let WithUrlDataContainerComponent = withRouter(ProfileApiContainer)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent)

// цепочка компонент
// ProfileContainer => WithUrlDataContainerComponent => ProfileApiContainer








