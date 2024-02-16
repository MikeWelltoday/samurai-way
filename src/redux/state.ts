//=============================================================================
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

export type RerenderEntireTreeFunctionType = () => void

export type subscribeFunctionType = (observer: () => void) => void

export type GetStateFunctionType = () => StateType

export type AddPostFunctionType = () => void

export type UpdateNewPostTextFunctionType = (newText: string) => void

//=============================================================================
//TYPES-STORE

export type StoreType = {
    _state: StateType
    _callSubscriber: RerenderEntireTreeFunctionType
    subscribe: subscribeFunctionType
    getState: GetStateFunctionType
    addPost: AddPostFunctionType
    updateNewPostText: UpdateNewPostTextFunctionType
}

//=============================================================================
// STORE

export const store: StoreType = {

    // ---------------------------------------------------------------------------------------------------------------

    _state: {
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
    },

    // ---------------------------------------------------------------------------------------------------------------

    _callSubscriber() {
        console.log('🚀RENDER')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    addPost() {
        this._state.profilePage.posts.push({id: 5, message: this._state.profilePage.newPostText, likesCount: 0})
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    }

    // ---------------------------------------------------------------------------------------------------------------
}