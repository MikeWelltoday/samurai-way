import React, {FC, useState} from 'react'
import S from './User.module.css'
import {NavLink} from 'react-router-dom'
import {useAppDispatch, usersFollowToggleTC, UsersType} from '../../../../redux'

//========================================================================================

type UserPropsType = {
    user: UsersType
}

//========================================================================================

export const User: FC<UserPropsType> = (props) => {

    const dispatch = useAppDispatch()

    const [isBlocked, setIsBlocked] = useState(false)

    function usersFollowToggleHandler() {
        setIsBlocked(true)
        dispatch(usersFollowToggleTC(props.user.id, props.user.followed))
            .finally(() => setIsBlocked(false))
    }


    return (
        <li className={S.user}>

            <div className={S.userPhoto}>
                <NavLink to={`/profile/${props.user.id}`}>
                    {props.user.photos.small ? <img src={props.user.photos.small} alt="sry"/> : '🦝'}
                </NavLink>

                <button onClick={usersFollowToggleHandler} disabled={isBlocked}>
                    {props.user.followed ? 'UNFOLLOW' : 'FOLLOW'}
                </button>
            </div>

            <div className={S.userBody}>
                <h4>{props.user.name}</h4>
            </div>

        </li>
    )
}