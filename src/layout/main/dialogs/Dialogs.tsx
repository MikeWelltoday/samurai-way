import React, {FC} from 'react'
import S from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem'
import {Message} from './message/Message'
import {DialogsType, MessagesType} from '../../../redux/state'

//============================================================================================================

type MessagesPropsType = {
    state: { dialogs: DialogsType[], messages: MessagesType[] }
}

//============================================================================================================

export const Dialogs: FC<MessagesPropsType> = (props) => {
    return (
        <main className={S.dialogs}>
            <ul className={S.dialogsList}>
                {props.state.dialogs.map(d => <DialogItem key={d.id} person={d.person} id={d.id}/>)}
            </ul>
            <ul className={S.messageList}>
                {props.state.messages.map(m => <Message key={m.id} text={m.text}/>)}
            </ul>
        </main>
    )
}