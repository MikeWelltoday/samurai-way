import React from 'react'
import {Profile} from './Profile'
import {StateType} from '../../../redux/redux-store'
import {connect} from 'react-redux'
import axios from 'axios'


type ProfileAPIComponentClassType = {}

//========================================================================================

type ProfileApiType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: 2,
    photos: PhotoType
}

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


//========================================================================================

export class ProfileContainer extends React.Component<ProfileAPIComponentClassType> {

    componentDidMount() {

        axios.get<ProfileApiType>(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                debugger
            })

    }


    render() {
        return <Profile {...this.props}/>
    }
}

//========================================================================================

// function mapStateToProps(state: StateType) {
//     return {}
// }
//
// export const ProfileContainer = connect(mapStateToProps, {})(ProfileApiContainer)















