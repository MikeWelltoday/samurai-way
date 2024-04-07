import {
    ProfileStateType,
    profileReducer,
    profileReducerAddPostAC, setUserProfileAC, setStatusAC
} from '../reducers/profile-reducer'
import {UserProfileApiType} from '../../api/profile-api'

//========================================================================================

let startState: ProfileStateType

beforeEach(() => {
    startState = {
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
})

//========================================================================================

test('DIALOGS-SEND-MESSAGE', () => {

    const endState = profileReducer(startState, profileReducerAddPostAC('blabla'))
    expect(endState.posts.length).toBe(5)
    expect(endState.posts[4].message).toBe('blabla')
    expect(endState.posts[4].likesCount).toBe(0)
})

test('PROFILE-SET-USER', () => {
    const userData: UserProfileApiType = {
        aboutMe: 'я круто чувак 1001%',
        contacts: {
            facebook: 'facebook.com',
            website: null,
            vk: 'vk.com/dimych',
            twitter: 'https://twitter.com/@sdf',
            instagram: 'instagra.com/sds',
            youtube: null,
            github: 'github.com',
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'не ищу, а дурачусь',
        fullName: 'samurai dimych',
        userId: 2,
        photos: {
            small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
            large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'
        }
    }
    const endState = profileReducer(startState, setUserProfileAC(userData))
    expect(endState.userProfile).not.toEqual({})
    expect(endState.userProfile).toEqual(userData)
})

test('', () => {
    const statusFromServer = 'STATUS FROM SERVER'
    const endState = profileReducer(startState, setStatusAC(statusFromServer))
    expect(endState.status).toBe(statusFromServer)

    const statusFromServerWithNull = null
    const endStateWithNull = profileReducer(startState, setStatusAC(statusFromServerWithNull))
    expect(endStateWithNull.status).toBe('NO STATUS')
})
