import React, {FC} from 'react'
import {UsersType} from '../../../redux'
import S from './Users.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../app/App'

//========================================================================================

type UsersClassType = {
    users: UsersType[]
    currentPage: number
    pageSize: number
    totalUsersCount: number
    changePageHandler: (newPageNumber: number) => void
    usersFollowToggle: (userId: number) => void
    usersSetCurrentPage: (newPageNumber: number) => void
}

//========================================================================================

export const Users: FC<UsersClassType> = (props) => {

    function usersFollowToggle(id: number) {
        props.usersFollowToggle(id)
    }

    function changePageHandler(newPageNumber: number) {
        props.usersSetCurrentPage(newPageNumber)
        props.changePageHandler(newPageNumber)
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {

        // ограничение по количеству страничек
        if (i <= 20) {
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
                            className={`${p === props.currentPage && S.active}`}
                            onClick={() => changePageHandler(p)}
                        >
                                {p}
                        </span>
                    )
                })}
            </div>

            <h2>USERS</h2>

            <ul className={S.usersList}>
                {props.users.map(u => {
                    return (
                        <li key={u.id} className={S.user}>

                            <div className={S.userPhoto}>
                                <NavLink to={`/profile/${u.id}`}>
                                    {
                                        u.photos.small ? <img src={u.photos.small} alt="sry"/> : '🦝'
                                    }
                                </NavLink>

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