import React, {FC} from 'react'
import {Dialogs} from './Dialogs'
import {dialogsReducerAddMessageAC, dialogsReducerUpdateNewMessageBodyAC} from '../../../redux/dialogs-reducer'
import {StoreContext} from '../../../StoreContext'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type DialogsContainerPropsType = {}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const DialogsContainer: FC<DialogsContainerPropsType> = (props) => {

    return (

        <StoreContext.Consumer>
            {(store) => {

                function onNewMessageChange(textInput: string) {
                    store.dispatch(dialogsReducerUpdateNewMessageBodyAC(textInput))
                }

                function onSendMessageClick() {
                    store.dispatch(dialogsReducerAddMessageAC())
                }

                return (
                    <Dialogs
                        dialogsPage={store.getState().dialogsPage}
                        onNewMessageChange={onNewMessageChange}
                        onSendMessageClick={onSendMessageClick}
                    />
                )
            }}
        </StoreContext.Consumer>


    )
}
