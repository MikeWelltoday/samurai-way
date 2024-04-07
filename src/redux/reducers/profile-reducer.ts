import {UserProfileApiType} from '../../api/profile-api'

//========================================================================================

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileStateType = {
    posts: PostsType[]
    userProfile: UserProfileApiType | null
    status: string
}

//========================================================================================

export type ProfileReducerActionType =
    ReturnType<typeof profileReducerAddPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

//========================================================================================

const initialState: ProfileStateType = {
    posts:
        [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It is my first post', likesCount: 3},
            {id: 3, message: 'Yo', likesCount: 1},
            {id: 4, message: 'Yo', likesCount: 5}
        ],
    userProfile: null,
    status: ''
}

export function profileReducer(state: ProfileStateType = initialState, action: ProfileReducerActionType): ProfileStateType {

    switch (action.type) {

        case 'PROFILE-ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, message: action.payload.message, likesCount: 0}]
            }
        }

        case 'PROFILE-SET-USER': {
            return {...state, userProfile: {...action.payload.userProfileFromServer}}
        }

        case 'PROFILE-SET-STATUS': {
            return {...state, status: action.payload.status || 'NO STATUS'}
        }

        default: {
            return state
        }
    }
}

//========================================================================================

export function profileReducerAddPostAC(message: string) {
    return {type: 'PROFILE-ADD-POST', payload: {message}} as const
}

export function setUserProfileAC(userProfileFromServer: UserProfileApiType) {
    return {type: 'PROFILE-SET-USER', payload: {userProfileFromServer}} as const
}

export function setStatusAC(status: string | null) {
    return {type: 'PROFILE-SET-STATUS', payload: {status}} as const
}




