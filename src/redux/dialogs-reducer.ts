import {ActionType, DialogsPageType} from './state'

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

export function dialogsReducer(state: DialogsPageType, action: ActionType): DialogsPageType {

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

