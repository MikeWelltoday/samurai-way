import React from 'react'
import {Profile} from './Profile'
import {AppRootStateType, fetchUserProfileTC, fetchStatusProfileTC} from '../../../redux'
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {UserProfileApiType} from '../../../api/profile-api'
import {withAuthRedirect} from '../../../shared'
import {compose} from 'redux'
import {updateStatusTC} from '../../../redux/thunks/profile-thunks'

//========================================================================================

type MapStateToPropsType = {
    userProfile: UserProfileApiType | null
    profileStatus: string
    authUserID: number | null
}

type MapDispatchToProps = {
    fetchUserProfileTC: (userID: string) => void
    fetchStatusProfileTC: (userID: string) => void
    updateStatusTC: (newStatus: string) => void
}

export type ProfileApiContainerPropsType = MapStateToPropsType & MapDispatchToProps

//========================================================================================

type PathParamsType = {
    userId: string
}

//========================================================================================
// общие пропсы

type PropsType = RouteComponentProps<PathParamsType> & ProfileApiContainerPropsType

//========================================================================================

export class ProfileApiContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId

        if (!userId) {
            if (this.props.authUserID) {
                userId = '' + this.props.authUserID
            }
        }

        this.props.fetchUserProfileTC(userId)
        this.props.fetchStatusProfileTC(userId)
    }


    render() {
        return (
            <Profile
                {...this.props}
                userProfile={this.props.userProfile}
                profileStatus={this.props.profileStatus}
                updateStatus={this.props.updateStatusTC}
                isStatusChangeable={!this.props.match.params.userId}
            />
        )
    }
}

//========================================================================================

function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        userProfile: state.profilePage.userProfile,
        profileStatus: state.profilePage.status,
        authUserID: state.auth.id
    }
}

const mapDispatchToProps: MapDispatchToProps = {
    fetchUserProfileTC,
    fetchStatusProfileTC,
    updateStatusTC
}

const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileApiContainer)

export default ProfileContainer














