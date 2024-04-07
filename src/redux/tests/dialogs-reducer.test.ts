import {dialogsReducer, dialogsReducerAddMessageAC, DialogsStateType} from '../reducers/dialogs-reducer'

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
            ]
    }

})

//========================================================================================

test('DIALOGS-SEND-MESSAGE', () => {

    const endState = dialogsReducer(startState, dialogsReducerAddMessageAC('blabla'))

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].id).toBe('4')
    expect(endState.messages[3].text).toBe('blabla')

})