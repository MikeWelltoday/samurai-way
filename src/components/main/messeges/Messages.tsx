import React, {FC} from 'react'
import S from './Messages.module.css'
import {Dialog} from './dialog/Dialog'
import {ChatItem} from './chat/ChatItem'
import {MessagesDataType} from '../../../index'

//============================================================================================================

type MessagesPropsType = {
    messagesData: MessagesDataType
}

//============================================================================================================

export const Messages: FC<MessagesPropsType> = (props) => {
    return (
        <main className={S.messages}>
            <ul className={S.dialogs}>
                {props.messagesData.dialogsData.map(d => <Dialog key={d.id} person={d.person} id={d.id}/>)}
            </ul>
            <ul className={S.chat}>
                {props.messagesData.chatData.map(c => <ChatItem key={c.id} text={c.text}/>)}
            </ul>
        </main>
    )
}