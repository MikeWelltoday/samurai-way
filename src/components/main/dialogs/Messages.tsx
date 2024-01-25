import React, {FC} from 'react'
import S from './Messages.module.css'
import {NavLink} from 'react-router-dom'

//============================================================================================================

export const Messages: FC = () => {
    return (
        <main className={S.messages}>
            <ul className={S.dialogs}>
                <li className={`${S.dialog} ${S.active}`}>
                    <NavLink to={'/messages/1'} activeClassName={S.active}>Anna</NavLink>
                </li>
                <li className={S.dialog}>
                    <NavLink to={'/messages/2'} activeClassName={S.active}>Dima</NavLink>
                </li>
                <li className={S.dialog}>
                    <NavLink to={'/messages/3'} activeClassName={S.active}>Mike</NavLink>
                </li>
                <li className={S.dialog}>
                    <NavLink to={'/messages/4'} activeClassName={S.active}>Roma</NavLink>
                </li>
                <li className={S.dialog}>
                    <NavLink to={'/messages/5'} activeClassName={S.active}>Margo</NavLink>
                </li>
            </ul>
            <ul className={S.chats}>
                <li className={S.chat}>Hello friend</li>
                <li className={S.chat}>How are you?</li>
                <li className={S.chat}>I've got story to tell</li>
            </ul>
        </main>
    )
}