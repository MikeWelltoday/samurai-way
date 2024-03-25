import {Dialogs, MapDispatchToPropsType, MapStateToPropsType} from './Dialogs'
import {AppRootStateType, dialogsReducerAddMessageAC, dialogsReducerUpdateNewMessageBodyAC} from '../../../redux'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'

//========================================================================================

function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    dialogsReducerUpdateNewMessageBodyAC,
    dialogsReducerAddMessageAC
}

export const DialogsContainer = withAuthRedirect(
    connect(mapStateToProps, mapDispatchToProps)(Dialogs))