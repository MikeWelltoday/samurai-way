import React, {FC} from 'react'
import S from './Messages.module.css'
import {Dialog, dialogPropsType} from './dialog/Dialog'

//============================================================================================================

type ChatDataType = {
    id: string, text: string
}

//============================================================================================================

const dialogsData: dialogPropsType[] = [
    {id: '1', person: 'Anna'},
    {id: '2', person: 'Dima'},
    {id: '3', person: 'Mike'},
    {id: '4', person: 'Roma'},
    {id: '5', person: 'Margo'}
]

const chatData: ChatDataType[] = [
    {id: '1', text: 'Hello friend'},
    {id: '2', text: 'How are you?'},
    {id: '3', text: 'I\'ve got story to tell'}
]

export const Messages: FC = () => {
    return (
        <main className={S.messages}>
            <ul className={S.dialogs}>
                {dialogsData.map(item => <Dialog key={item.id} person={item.person} id={item.id}/>)}
            </ul>
            <ul className={S.chat}>
                {chatData.map(c => <li key={c.id} className={S.chatItem}>{c.text}</li>)}
            </ul>
        </main>
    )
}