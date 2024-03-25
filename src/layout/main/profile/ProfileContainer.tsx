import React from 'react'
import {Profile} from './Profile'
import {AppRootStateType, fetchUserProfileTC} from '../../../redux'
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {UserProfileApiType} from '../../../redux/api/profile-api'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'

//========================================================================================
// цепочка компонент
// ProfileContainer => withAuthRedirect => connect => WithUrlDataContainerComponent => ProfileApiContainer => Profile

//              withAuthRedirect => проверка авторизации, и перенаправление на login
//                       connect => доступ к state + dispatch
// WithUrlDataContainerComponent => доступ к считыванию url
//           ProfileApiContainer => запрос на сервер
//

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

// контейнерная компонента
// @ts-ignore
const WithUrlDataContainerComponent = withRouter(ProfileApiContainer)

//========================================================================================

function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        userProfile: state.profilePage.userProfile
    }
}

const mapDispatchToProps: MapDispatchToProps = {
    fetchUserProfileTC
}

export const ProfileContainer = withAuthRedirect(
    connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent))















