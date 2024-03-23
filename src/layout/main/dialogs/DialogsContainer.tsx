import {Dialogs} from './Dialogs'
import {
    AppRootStateType,
    dialogsReducerAddMessageAC,
    dialogsReducerUpdateNewMessageBodyAC
} from '../../../redux'
import {connect} from 'react-redux'
import {DispatchType} from '../../../redux'

//========================================================================================

function mapStateToProps(state: AppRootStateType) {
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