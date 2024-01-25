import React, {FC} from 'react'
import S from './Messages.module.css'
import {Dialog, dialogPropsType} from './dialog/Dialog'

//============================================================================================================

const persons: dialogPropsType[] = [
    {id: '1', person: 'Anna'},
    {id: '2', person: 'Dima'},
    {id: '3', person: 'Mike'},
    {id: '4', person: 'Roma'},
    {id: '5', person: 'Margo'}
]

export const Messages: FC = () => {
    return (
        <main className={S.messages}>
            <ul className={S.dialogs}>
                {persons.map(item => <Dialog key={item.id} person={item.person} id={item.id}/>)}
            </ul>
            <ul className={S.chats}>
                <li className={S.chat}>Hello friend</li>
                <li className={S.chat}>How are you?</li>
                <li className={S.chat}>I've got story to tell</li>
            </ul>
        </main>
    )
}