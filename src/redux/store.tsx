import {profileReducer} from './profile-reducer/profile-reducer'
import {dialogsReducer} from './dialogs-reducer/dialogs-reducer'
import {ActionType, DispatchType, StateType} from './redux-store'

//========================================================================================
// 🎲 .T.Y.P.E.S. - .F.U.N.C.T.I.O.N.S.

export type CallSubscriberFunctionType = () => void
export type subscribeFunctionType = (observer: () => void) => void
export type GetStateFunctionType = () => StateType

//========================================================================================
// 🎲 .T.Y.P.E.S. - .S.T.O.R.E.

export type StoreType = {
    _state: StateType
    _callSubscriber: CallSubscriberFunctionType
    subscribe: subscribeFunctionType
    getState: GetStateFunctionType
    dispatch: DispatchType
}

//========================================================================================
// 💾 .S.T.O.R.E.

const store: StoreType = {

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
        },
        usersPage: {
            users: [],
            pageSize: 5,
            totalUsersCount: 0
        }
    },

    //-------------------------------------------------------------------------------------

    _callSubscriber() {
        console.log('🚀RENDER')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    //-------------------------------------------------------------------------------------

    dispatch(action: ActionType): void {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()

        // switch (action.type) {
        //
        //     case 'PROFILE-UPDATE-NEW-POST-TEXT': {
        //         this._state.profilePage.newPostText = action.payload.newText
        //         this._callSubscriber()
        //         break
        //     }
        //
        //     case 'PROFILE-ADD-POST': {
        //         this._state.profilePage.posts.push({id: 5, message: this._state.profilePage.newPostText, likesCount: 0})
        //         this._state.profilePage.newPostText = ''
        //         this._callSubscriber()
        //         break
        //     }
        //
        //     case 'DIALOGS-UPDATE-NEW-MESSAGE-BODY': {
        //         this._state.dialogsPage.newMessageBody = action.payload.newBody
        //         this._callSubscriber()
        //         break
        //     }
        //
        //     case 'DIALOGS-SEND-MESSAGE': {
        //         this._state.dialogsPage.messages.push({id: '4', text: this._state.dialogsPage.newMessageBody})
        //         this._state.dialogsPage.newMessageBody = ''
        //         this._callSubscriber()
        //         break
        //     }
        // }


    }
}