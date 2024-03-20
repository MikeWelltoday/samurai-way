import React, {FC} from 'react'
import S from './Message.module.css'

//========================================================================================

type MessagePropsType = {
    text: string
}

//========================================================================================

export const Message: FC<MessagePropsType> = (props) => {
    return (
        <li className={S.messageItem}>{props.text}</li>
    )
}


