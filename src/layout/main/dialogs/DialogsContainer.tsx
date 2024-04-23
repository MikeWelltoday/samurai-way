import {Dialogs, MapDispatchToPropsType, MapStateToPropsType} from './Dialogs'
import {AppRootStateType, dialogsReducerAddMessageAC} from '../../../redux'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../../shared'
import {compose} from 'redux'
import React from 'react'

//========================================================================================

function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    dialogsReducerAddMessageAC
}

export const DialogsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)



