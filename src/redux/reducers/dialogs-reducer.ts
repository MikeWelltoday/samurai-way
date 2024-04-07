export type DialogsType = {
    id: string, person: string
}

export type MessagesType = {
    id: string
    text: string
}

export type DialogsStateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

//========================================================================================

export type DialogsReducerActionType = ReturnType<typeof dialogsReducerAddMessageAC>

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
        ]
}

//========================================================================================

export function dialogsReducer(state: DialogsStateType = initialState, action: DialogsReducerActionType): DialogsStateType {

    switch (action.type) {

        case 'DIALOGS-SEND-MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, {id: '' + (state.messages.length + 1), text: action.payload.message}]
            }
        }

        default: {
            return state
        }
    }
}

//========================================================================================

export function dialogsReducerAddMessageAC(message: string) {
    return {type: 'DIALOGS-SEND-MESSAGE', payload: {message}} as const
}
