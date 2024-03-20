import React from 'react'
import {Profile} from './Profile'
import {StateType} from '../../../redux'
import {connect} from 'react-redux'
import axios from 'axios'
import {setUserProfile} from '../../../redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'

//========================================================================================

type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type PhotoType = {
    small: string
    large: string
}

export type UserProfileApiType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: PhotoType
    userId: 2,
}

//========================================================================================

type MapStateToPropsType = {
    userProfile: UserProfileApiType | null
}

type MapDispatchToProps = {
    setUserProfile: (user: UserProfileApiType) => void
}

type ProfileApiContainerPropsType = MapStateToPropsType & MapDispatchToProps

//========================================================================================

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileApiContainerPropsType

//========================================================================================

export class ProfileApiContainer extends React.Component<PropsType> {

    componentDidMount() {

        debugger

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }

        axios.get<UserProfileApiType>('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }
}

//========================================================================================

function mapStateToProps(state: StateType): MapStateToPropsType {
    return {
        userProfile: state.profilePage.userProfile
    }
}

// контейнерная компонента

// @ts-ignore
let WithUrlDataContainerComponent = withRouter(ProfileApiContainer)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

// цепочка компонент
// ProfileContainer => WithUrlDataContainerComponent => ProfileApiContainer








