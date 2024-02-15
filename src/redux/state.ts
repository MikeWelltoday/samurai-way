import {rerenderEntireTree} from '../render'


//============================================================================================================
// TYPES-DATA


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: string, person: string
}

export type MessagesType = {
    id: string
    text: string
}

export type StateType = {
    profilePage: { posts: PostsType[] }
    dialogsPage: { dialogs: DialogsType[], messages: MessagesType[] }
}

//=============================================================================
//TYPES-FUNCTIONS

export type AddPostFunctionType = (postMessage: string) => void


//=============================================================================
//DATA

export const state: StateType = {

    profilePage: {
        posts:
            [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It is my first post', likesCount: 3},
                {id: 3, message: 'Yo', likesCount: 1},
                {id: 4, message: 'Yo', likesCount: 5}
            ]

    },
    dialogsPage: {
        dialogs:
            [
                {id: '1', person: 'Anna'},
                {id: '2', person: 'Dima'},
                {id: '3', person: 'Mike'},
                {id: '4', person: 'Roma'},
                {id: '5', person: 'Margo'}
            ],
        messages:
            [
                {id: '1', text: 'Hello friend'},
                {id: '2', text: 'How are you?'},
                {id: '3', text: 'I\'ve got story to tell'}
            ]
    }
    // sideBar: {}
}

//=============================================================================
//CALLBACK FUNCTIONS

export function addPost(postMessage: string) {
    state.profilePage.posts.push({id: 5, message: postMessage, likesCount: 0})
    rerenderEntireTree(state)
}


