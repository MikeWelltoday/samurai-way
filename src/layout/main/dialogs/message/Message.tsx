import React, {FC} from 'react'
import S from './Message.module.css'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type MessagePropsType = {
    text: string
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.


export const Message: FC<MessagePropsType> = (props) => {
    return (
        <li className={S.messageItem}>{props.text}</li>
    )
}


