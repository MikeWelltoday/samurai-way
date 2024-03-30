import {Dialogs, MapDispatchToPropsType, MapStateToPropsType} from './Dialogs'
import {AppRootStateType, dialogsReducerAddMessageAC, dialogsReducerUpdateNewMessageBodyAC} from '../../../redux'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'
import React from 'react'

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

export const DialogsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)



