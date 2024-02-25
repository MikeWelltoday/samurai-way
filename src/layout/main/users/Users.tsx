import React, {FC, useEffect} from 'react'
import S from './Users.module.css'
import {UsersType} from '../../../redux/users-reducer/users-reducer'

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

    const newUsersFromServer: UsersType[] = [
        {
            id: 4,
            followed: false,
            fullName: 'New User',
            status: 'Person',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ]

    useEffect(() => {
        props.usersSetUsers(newUsersFromServer)
    }, [])

    function usersFollowToggle(id: number) {
        props.usersFollowToggle(id)
    }

    return (
        <main className={S.users}>

            <h2>USERS</h2>

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
                                <h4>{u.fullName}</h4>
                                <span>{u.location.country},{u.location.city}</span>
                                <p>{u.status}</p>
                            </div>

                        </li>
                    )
                })}
            </ul>

            <button className={S.showMoreButton}>SHOW MORE</button>

        </main>
    )
}