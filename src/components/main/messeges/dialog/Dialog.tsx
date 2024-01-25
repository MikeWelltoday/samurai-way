import React, {FC} from 'react'
import S from './Dialog.module.css'
import {NavLink} from 'react-router-dom'

//============================================================================================================
export type dialogPropsType = {
    person: string
    id: string
}
//============================================================================================================

export const Dialog: FC<dialogPropsType> = (props) => {
    return (
        <li className={S.dialog}>
            <NavLink to={`/messages/` + props.id} activeClassName={S.active}>{props.person}</NavLink>
        </li>
    )
}