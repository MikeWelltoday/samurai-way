import React from 'react'
import {UsersType} from '../../../redux/users-reducer/users-reducer'
import S from './Users.module.css'
import axios from 'axios'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type UsersClassType = {
    users: UsersType[]
    usersSetUsers: (users: UsersType[]) => void
    usersFollowToggle: (userId: number) => void
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export class UsersClass extends React.Component<UsersClassType, any> {

    // переброска пропсов
    // конструирвоание происходит 1 раз
    constructor(props: UsersClassType) {
        super(props)

        // получаем данные пользователей с сервера
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.usersSetUsers(response.data.items))
    }

    usersFollowToggle(id: number) {
        this.props.usersFollowToggle(id)
    }

    render() {

        return (
            <main className={S.users}>

                <h2>USERS</h2>

                <ul className={S.usersList}>
                    {this.props.users.map(u => {
                        return (
                            <li key={u.id} className={S.user}>

                                <div className={S.userPhoto}>
                                    <span>🦝</span>
                                    <button
                                        onClick={() => this.usersFollowToggle(u.id)}
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
}