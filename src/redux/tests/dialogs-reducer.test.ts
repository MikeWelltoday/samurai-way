import {
    DialogsStateType,
    dialogsReducer,
    dialogsReducerAddMessageAC,
    dialogsReducerUpdateNewMessageBodyAC
} from '../reducers/dialogs-reducer'

//========================================================================================

let startState: DialogsStateType

beforeEach(() => {

    startState = {
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

})

//========================================================================================
// 🧪 .T.E.S.T.S.

test('DIALOGS-UPDATE-NEW-MESSAGE-BODY', () => {

    const newBody = 'IT IS DONE'

    const endState = dialogsReducer(startState, dialogsReducerUpdateNewMessageBodyAC(newBody))

    expect(endState.newMessageBody).not.toBe('')
    expect(endState.newMessageBody).toBe(newBody)
})

test('DIALOGS-SEND-MESSAGE', () => {

    startState.newMessageBody = 'SOMETHING IS PUT HERE'
    const newText = startState.newMessageBody

    const endState = dialogsReducer(startState, dialogsReducerAddMessageAC())

    expect(endState.newMessageBody).toBe('')
    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].text).toBe(newText)
})