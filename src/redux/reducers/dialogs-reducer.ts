//========================================================================================

export type DialogsType = {
    id: string, person: string
}

export type MessagesType = {
    id: string
    text: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}


//========================================================================================

export type DialogsReducerActionType =
    ReturnType<typeof dialogsReducerUpdateNewMessageBodyAC>
    | ReturnType<typeof dialogsReducerAddMessageAC>


//========================================================================================

const initialState = {
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

//========================================================================================

export function dialogsReducer(state: DialogsPageType = initialState, action: DialogsReducerActionType): DialogsPageType {

    switch (action.type) {

        case 'DIALOGS-UPDATE-NEW-MESSAGE-BODY': {
            return {...state, newMessageBody: action.payload.newBody}
        }

        case 'DIALOGS-SEND-MESSAGE': {
            const newMessageBodyCopy = state.newMessageBody
            state.newMessageBody = ''
            return {...state, messages: [...state.messages, {id: '4', text: newMessageBodyCopy}]}
        }

        default: {
            return state
        }

    }

}

//========================================================================================

export function dialogsReducerUpdateNewMessageBodyAC(newBody: string) {
    return {type: 'DIALOGS-UPDATE-NEW-MESSAGE-BODY', payload: {newBody}} as const
}

export function dialogsReducerAddMessageAC() {
    return {type: 'DIALOGS-SEND-MESSAGE', payload: {}} as const
}
