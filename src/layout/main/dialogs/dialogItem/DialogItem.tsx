import React, {FC} from 'react'
import S from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

//============================================================================================================
// 🎲 .T.Y.P.E.S.

export type DialogItemPropsType = {
    person: string
    id: string
}
//============================================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const DialogItem: FC<DialogItemPropsType> = (props) => {
    return (
        <li className={S.dialogItem}>
            <NavLink to={`/dialogs/` + props.id} activeClassName={S.active}>{props.person}</NavLink>
        </li>
    )
}