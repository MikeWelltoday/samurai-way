import {
    ProfileStateType,
    profileReducer,
    profileReducerAddPostAC,
    profileUpdateNewPostTextAC, setUserProfileAC
} from '../reducers/profile-reducer'
import {UserProfileApiType} from '../api/profile-api'

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
        newPostText: '',
        userProfile: null
    }

})

//========================================================================================

test('PROFILE-UPDATE-NEW-POST-TEXT', () => {

    const newBody = 'IT IS DONE'

    const endState = profileReducer(startState, profileUpdateNewPostTextAC(newBody))

    expect(endState.newPostText).not.toBe('')
    expect(endState.newPostText).toBe(newBody)
})

test('DIALOGS-SEND-MESSAGE', () => {

    startState.newPostText = 'SOMETHING IS PUT HERE'
    const newText = startState.newPostText

    const endState = profileReducer(startState, profileReducerAddPostAC())

    expect(endState.newPostText).toBe('')
    expect(endState.posts.length).toBe(5)
    expect(endState.posts[4].message).toBe(newText)
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
