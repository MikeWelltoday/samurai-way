//============================================================================================================
// DATA TYPES

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
    messagesPage: { dialogs: DialogsType[], messages: MessagesType[] }


}

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
    messagesPage: {
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
}