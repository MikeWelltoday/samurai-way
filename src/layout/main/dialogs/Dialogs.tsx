import React, {FC} from 'react'
import S from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem'
import {Message} from './message/Message'
import {dialogsReducerAddMessageAC, DialogsStateType} from '../../../redux'
import {MessageForm} from './messageForm/MessageForm'

//========================================================================================

export type MapStateToPropsType = {
    dialogsPage: DialogsStateType
}

export type MapDispatchToPropsType = {
    dialogsReducerAddMessageAC: (message: string) => void
}

type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

//========================================================================================

export const Dialogs: FC<DialogsPropsType> = (props) => {


    return (
        <main className={S.dialogs}>

            <ul className={S.dialogsList}>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} person={d.person} id={d.id}/>)}
            </ul>


            <div className={S.messageList}>
                <ul>{props.dialogsPage.messages.map(m => <Message key={m.id} text={m.text}/>)}</ul>

                <MessageForm dialogsReducerAddMessageAC={props.dialogsReducerAddMessageAC}/>
            </div>

        </main>
    )
}