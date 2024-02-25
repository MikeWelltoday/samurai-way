import React, {ChangeEvent, FC} from 'react'
import S from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem'
import {Message} from './message/Message'
import {DialogsPageType} from '../../../redux/dialogs-reducer/dialogs-reducer'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (textInput: string) => void
    sendMessage: () => void
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const Dialogs: FC<DialogsPropsType> = (props) => {

    function onNewMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
        props.updateNewMessageBody(e.currentTarget.value)
    }

    return (
        <main className={S.dialogs}>
            <ul className={S.dialogsList}>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} person={d.person} id={d.id}/>)}
            </ul>
            <div className={S.messageList}>
                <ul>{props.dialogsPage.messages.map(m => <Message key={m.id} text={m.text}/>)}</ul>
                <div className={S.inputFrom}>
                    <textarea
                        placeholder={'Your Message'}
                        value={props.dialogsPage.newMessageBody}
                        onChange={onNewMessageChange}
                    />
                    <button onClick={props.sendMessage}>SEND</button>
                </div>
            </div>
        </main>
    )
}