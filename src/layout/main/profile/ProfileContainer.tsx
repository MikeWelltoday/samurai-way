import React from 'react'
import {Profile} from './Profile'
import {AppRootStateType, fetchUserProfileTC} from '../../../redux'
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {UserProfileApiType} from '../../../api/profile-api'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'

//========================================================================================

type MapStateToPropsType = {
    userProfile: UserProfileApiType | null
}

type MapDispatchToProps = {
    fetchUserProfileTC: (userID: string) => void
}

type ProfileApiContainerPropsType = MapStateToPropsType & MapDispatchToProps

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

function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        userProfile: state.profilePage.userProfile
    }
}

const mapDispatchToProps: MapDispatchToProps = {
    fetchUserProfileTC
}

export const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileApiContainer)















