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

export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

//=============================================================================
//TYPES-FUNCTIONS

export type AddPostFunctionType = () => void

export type UpdateNewPostTextType = (newText: string) => void


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
            ],
        newPostText: 'IT-KAMASUTRA.com'

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
// RENDER FUNCTIONS

let rerenderEntireTree = () => {
}

export function subscribe(observer: () => void) {
    rerenderEntireTree = observer
}

//=============================================================================
//CALLBACK FUNCTIONS

export function addPost() {
    state.profilePage.posts.push({id: 5, message: state.profilePage.newPostText, likesCount: 0})
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export function updateNewPostText(newText: string) {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}



