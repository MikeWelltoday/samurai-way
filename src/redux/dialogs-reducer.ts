import {ActionType, DialogsPageType} from './state'


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

