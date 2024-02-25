import {Dialogs} from './Dialogs'
import {
    dialogsReducerAddMessageAC,
    dialogsReducerUpdateNewMessageBodyAC
} from '../../../redux/dialogs-reducer/dialogs-reducer'
import {connect} from 'react-redux'
import {DispatchType, StateType} from '../../../redux/redux-store'

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

function mapStateToProps(state: StateType) {
    return {
        dialogsPage: state.dialogsPage
    }
}

function mapDispatchToProps(dispatch: DispatchType) {
    return {
        updateNewMessageBody: (textInput: string) => dispatch(dialogsReducerUpdateNewMessageBodyAC(textInput)),
        sendMessage: () => dispatch(dialogsReducerAddMessageAC())
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)