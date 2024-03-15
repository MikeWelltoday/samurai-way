import {ActionType} from '../redux-store'
import {UserProfileApiType} from '../../layout/main/profile/ProfileContainer'

//========================================================================================

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    userProfile: UserProfileApiType | null
}

//========================================================================================

export type ProfileReducerActionType =
    ReturnType<typeof profileUpdateNewPostTextAC>
    | ReturnType<typeof profileReducerAddPostAC>
    | ReturnType<typeof setUserProfile>


//========================================================================================

export function profileUpdateNewPostTextAC(newText: string) {
    return {type: 'PROFILE-UPDATE-NEW-POST-TEXT', payload: {newText}} as const
}

export function profileReducerAddPostAC() {
    return {type: 'PROFILE-ADD-POST', payload: {}} as const
}

export function setUserProfile(userProfileFromServer: UserProfileApiType) {
    return {type: 'PROFILE-SET-USER', payload: {userProfileFromServer}} as const
}

//========================================================================================

const initialState = {
    posts:
        [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It is my first post', likesCount: 3},
            {id: 3, message: 'Yo', likesCount: 1},
            {id: 4, message: 'Yo', likesCount: 5}
        ],
    newPostText: '',
    userProfile: null
}

export function profileReducer(state: ProfilePageType = initialState, action: ActionType): ProfilePageType {

    switch (action.type) {

        case 'PROFILE-UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.payload.newText}
        }

        case 'PROFILE-ADD-POST': {
            const newPostTextCopy = state.newPostText
            state.newPostText = ''
            return {...state, posts: [...state.posts, {id: 5, message: newPostTextCopy, likesCount: 0}]}
        }

        case 'PROFILE-SET-USER': {
            return {...state, userProfile: {...action.payload.userProfileFromServer}}
        }

        default: {
            return state
        }

    }

}




