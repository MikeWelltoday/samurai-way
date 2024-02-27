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
    currentPage: number
    usersSetUsers: (users: UsersType[]) => void
    usersFollowToggle: (userId: number) => void
    usersSetCurrentPage: (newPageNumber: number) => void
    usersSetTotalUsersCount: (newTotalUsersCount: number) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.usersSetUsers(response.data.items)
                this.props.usersSetTotalUsersCount(response.data.totalCount)
            })
    }

    usersFollowToggle(id: number) {
        this.props.usersFollowToggle(id)
    }

    changePageHandler = (newPageNumber: number) => {
        this.props.usersSetCurrentPage(newPageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.usersSetUsers(response.data.items))
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {

            // ограничение по количеству страничек
            if (i < 30) {
                pages.push(i)
            }

        }

        return (
            <main className={S.users}>

                <div className={S.paginationBox}>

                    {pages.map(p => {
                        return (
                            <span
                                key={p}
                                className={`${p === this.props.currentPage && S.active}`}
                                onClick={() => this.changePageHandler(p)}
                            >
                                {p}
                            </span>
                        )
                    })}
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