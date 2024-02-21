import {ActionType, DialogsPageType} from './store'

//========================================================================================
// 🎲 .T.Y.P.E.S. - .R.E.D.U.C.E.R.

export type DialogsReducerActionType = ReturnType<typeof dialogsReducerUpdateNewMessageBodyAC>
    | ReturnType<typeof dialogsReducerAddMessageAC>

//========================================================================================
// 🍌 .A.C.

export function dialogsReducerUpdateNewMessageBodyAC(newBody: string) {
    return {type: 'DIALOGS-UPDATE-NEW-MESSAGE-BODY', payload: {newBody}} as const
}

export function dialogsReducerAddMessageAC() {
    return {type: 'DIALOGS-SEND-MESSAGE', payload: {}} as const
}

//========================================================================================
// 🧰 .R.E.D.U.C.E.R.

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

export function dialogsReducer(state: DialogsPageType = initialState, action: ActionType): DialogsPageType {

    switch (action.type) {

        case 'DIALOGS-UPDATE-NEW-MESSAGE-BODY': {
            state.newMessageBody = action.payload.newBody
            return state
        }

        case 'DIALOGS-SEND-MESSAGE': {
            state.messages.push({id: '4', text: state.newMessageBody})
            state.newMessageBody = ''
            return state
        }

        default: {
            return state
        }

    }

}

