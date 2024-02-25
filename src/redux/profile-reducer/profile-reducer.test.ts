import {ProfilePageType, profileReducer, profileReducerAddPostAC, profileUpdateNewPostTextAC} from './profile-reducer'

//========================================================================================
// 🍄 .S.T.A.R.T. - .S.T.A.T.E.

let startState: ProfilePageType

beforeEach(() => {

    startState = {
        posts:
            [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It is my first post', likesCount: 3},
                {id: 3, message: 'Yo', likesCount: 1},
                {id: 4, message: 'Yo', likesCount: 5}
            ],
        newPostText: ''
    }

})

//========================================================================================
// 🧪 .T.E.S.T.S.

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