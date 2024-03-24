import {Dialogs, MapDispatchToPropsType, MapStateToPropsType} from './Dialogs'
import {AppRootStateType, dialogsReducerAddMessageAC, dialogsReducerUpdateNewMessageBodyAC} from '../../../redux'
import {connect} from 'react-redux'

//========================================================================================

function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    dialogsReducerUpdateNewMessageBodyAC,
    dialogsReducerAddMessageAC
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)