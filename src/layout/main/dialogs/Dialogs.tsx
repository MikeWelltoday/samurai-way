import React, {FC} from 'react'
import S from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem'
import {Message} from './message/Message'
import {DialogsType, MessagesType} from '../../../index'

//============================================================================================================

type MessagesPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

//============================================================================================================

export const Dialogs: FC<MessagesPropsType> = (props) => {
    return (
        <main className={S.dialogs}>
            <ul className={S.dialogsList}>
                {props.dialogs.map(d => <DialogItem key={d.id} person={d.person} id={d.id}/>)}
            </ul>
            <ul className={S.messageList}>
                {props.messages.map(c => <Message key={c.id} text={c.text}/>)}
            </ul>
        </main>
    )
}