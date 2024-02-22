import React, {FC} from 'react'
import {Dialogs} from './Dialogs'
import {dialogsReducerAddMessageAC, dialogsReducerUpdateNewMessageBodyAC} from '../../../redux/dialogs-reducer'
import {StoreContext} from '../../../StoreContext'
import {connect} from 'react-redux'

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

//data
function mapStateToProps(state: any) {
    return {
        dialogsPage: state.dialogsPage
    }
}

// functions
function mapDispatchToProps() {
    return {
        c: 3
    }
}


// вызываем функцию, она возвращает функцию,
// и вызываем функцию которую вернули

// в аругмент помещаем чистую компоненту, которую хотим обернуть
// автоматически снабжает компоненту стором
const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
