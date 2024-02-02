import React, {FC} from 'react'
import S from './ChatItem.module.css'

//============================================================================================================

type ChatItemPropsType = {
    text: string
}

//============================================================================================================

export const ChatItem:FC<ChatItemPropsType> = (props) => {
    return (
        <li className={S.chatItem}>{props.text}</li>
    )
}