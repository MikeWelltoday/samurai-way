import React from 'react'
import {UsersType} from '../../../redux/users-reducer/users-reducer'
import S from './Users.module.css'
import axios from 'axios'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type UsersClassType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    usersSetUsers: (users: UsersType[]) => void
    usersFollowToggle: (userId: number) => void
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export class Users extends React.Component<UsersClassType, any> {

    // переброска пропсов
    // происходит под копотом => можно не писать
    constructor(props: UsersClassType) {
        super(props)
    }

    // метод, который будет вызываться при монтировании компоненты
    componentDidMount() {
        // получаем данные пользователей с сервера
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.usersSetUsers(response.data.items))
    }

    usersFollowToggle(id: number) {
        this.props.usersFollowToggle(id)
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = () => {
        }

        return (
            <main className={S.users}>

                <div className={S.paginationBox}>
                    <span className={S.active}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>

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