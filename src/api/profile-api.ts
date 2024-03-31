import {instance} from './instance'

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
    userId: 2
}

type AxiosResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

//========================================================================================

export const profileApi = {

    getUserProfile(userID: string) {
        return instance.get<UserProfileApiType>(`profile/${userID}`)
    },

    statusUpdate(status: string) {
        return instance.put<AxiosResponseType>('profile/status', {status})
    },

    getUserProfileStatus(userID: string) {
        return instance.get<string | null>(`profile/status/${userID}`)
    }
}



