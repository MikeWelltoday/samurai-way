import React, {FC, useEffect} from 'react'
import S from './Users.module.css'
import {UsersType} from '../../../redux/users-reducer/users-reducer'
import axios from 'axios'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type UsersPropsType = {
    users: UsersType[]
    usersSetUsers: (users: UsersType[]) => void
    usersFollowToggle: (userId: number) => void
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const Users: FC<UsersPropsType> = (props) => {

    function getUsers() {
        if (props.users.length === 0) {
            //делаем запрос на сервак
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.usersSetUsers(response.data.items))
        }
    }

    function usersFollowToggle(id: number) {
        props.usersFollowToggle(id)
    }

    return (
        <main className={S.users}>

            <h2>USERS</h2>

            <button onClick={getUsers}>get users</button>

            <ul className={S.usersList}>
                {props.users.map(u => {
                    return (
                        <li key={u.id} className={S.user}>

                            <div className={S.userPhoto}>
                                <span>🦝</span>
                                <button
                                    onClick={() => usersFollowToggle(u.id)}
                                >
                                    {u.followed ? 'UNFOLLOW' : 'FOLLOW'}
                                </button>
                            </div>

                            <div className={S.userBody}>
                                <h4>{u.name}</h4>
                            </div>

                        </li>
                    )
                })}
            </ul>

            <button className={S.showMoreButton}>SHOW MORE</button>

        </main>
    )
}