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
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

//=============================================================================
//TYPES-FUNCTIONS

export type CallSubscriberFunctionType = () => void
export type subscribeFunctionType = (observer: () => void) => void
export type GetStateFunctionType = () => StateType

//=============================================================================
//TYPES-REDUCER

type ActionType =
    ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof addMessageAC>


//=============================================================================
//AC

export function updateNewPostTextAC(newText: string) {
    return {type: 'UPDATE-NEW-POST-TEXT', payload: {newText}} as const
}

export function addPostAC() {
    return {type: 'ADD-POST'} as const
}

export function updateNewMessageBodyAC(newBody: string) {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', payload: {newBody}} as const
}

export function addMessageAC() {
    return {type: 'SEND-MESSAGE'} as const
}

//=============================================================================
//TYPE-DISPATCH

export type DispatchType = (action: ActionType) => void


//=============================================================================
//TYPES-STORE

export type StoreType = {
    _state: StateType
    _callSubscriber: CallSubscriberFunctionType
    subscribe: subscribeFunctionType
    getState: GetStateFunctionType
    dispatch: DispatchType
}

//=============================================================================
// STORE

export const store: StoreType = {

    _state: {
        profilePage: {
            posts:
                [
                    {id: 1, message: 'Hi, how are you?', likesCount: 15},
                    {id: 2, message: 'It is my first post', likesCount: 3},
                    {id: 3, message: 'Yo', likesCount: 1},
                    {id: 4, message: 'Yo', likesCount: 5}
                ],
            newPostText: ''
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
                ],
            newMessageBody: ''
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

    // ---------------------------------------------------------------------------------------------------------------

    dispatch(action: ActionType): void {
        switch (action.type) {

            case 'UPDATE-NEW-POST-TEXT': {
                this._state.profilePage.newPostText = action.payload.newText
                this._callSubscriber()
                break
            }

            case 'ADD-POST': {
                this._state.profilePage.posts.push({id: 5, message: this._state.profilePage.newPostText, likesCount: 0})
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                break
            }

            case 'UPDATE-NEW-MESSAGE-BODY': {
                this._state.dialogsPage.newMessageBody = action.payload.newBody
                this._callSubscriber()
                break
            }

            case 'SEND-MESSAGE': {
                this._state.dialogsPage.messages.push({id: '4', text: this._state.dialogsPage.newMessageBody})
                this._state.dialogsPage.newMessageBody = ''
                this._callSubscriber()
                break
            }
        }
    }
}