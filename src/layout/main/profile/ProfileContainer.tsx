import React from 'react'
import {Profile} from './Profile'
import {StateType} from '../../../redux/redux-store'
import {connect} from 'react-redux'
import axios from 'axios'
import {setUserProfile} from '../../../redux/profile-reducer/profile-reducer'

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
    userId: 2,
    photos: PhotoType
}

//========================================================================================

type ProfileApiContainerComponentClassType = {

    userProfile: UserProfileApiType | null

    setUserProfile: (user: UserProfileApiType) => void
}

//========================================================================================

export class ProfileApiContainer extends React.Component<ProfileApiContainerComponentClassType> {

    componentDidMount() {

        axios.get<UserProfileApiType>(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }
}

//========================================================================================

function mapStateToProps(state: StateType) {
    return {
        userProfile: state.profilePage.userProfile
    }
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileApiContainer)









