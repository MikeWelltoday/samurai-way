import {instance} from './instance'

//========================================================================================

type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

type PhotoType = {
    small: string
    large: string
}

export type UserProfileApiType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType

    aboutMe: string
    photos: PhotoType
}

type AxiosResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type ModelToUpdateType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
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
    },

    updateProfile(modelToUpdate: UserProfileApiType) {

        // данные профиля в get и put не совпадают
        // просто на сервер будем отправлять только нужные свойства
        const profile: ModelToUpdateType = {
            userId: modelToUpdate.userId,
            lookingForAJob: modelToUpdate.lookingForAJob,
            lookingForAJobDescription: modelToUpdate.lookingForAJobDescription,
            fullName: modelToUpdate.fullName,
            contacts: modelToUpdate.contacts
        }

        // и отправляем запрос на сервер
        return instance.put<AxiosResponseType>('profile', {...profile})
    },

    updatePhoto(image: any) {

        // на сервер файл полетит в специальном формате fromData
        const formData = new FormData()
        formData.append('image', image)

        return instance.put<AxiosResponseType>('profile/photo', formData, {

            // formData можно не указывать

            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}




