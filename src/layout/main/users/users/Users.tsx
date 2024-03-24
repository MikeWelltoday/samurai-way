import React, {FC} from 'react'
import {UsersType} from '../../../../redux'
import S from './Users.module.css'
import {User} from '../user/User'

//========================================================================================

type UsersClassType = {
    users: UsersType[]
    currentPage: number
    pageSize: number
    totalUsersCount: number

    changePageHandler: (newPageNumber: number) => void
    usersSetCurrentPage: (newPageNumber: number) => void
}

//========================================================================================

export const Users: FC<UsersClassType> = (props) => {


    function changePageHandler(newPageNumber: number) {
        return () => {
            props.usersSetCurrentPage(newPageNumber)
            props.changePageHandler(newPageNumber)
        }
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        // ограничение по количеству страничек
        (i <= 20) && pages.push(i)
    }

    return (
        <main className={S.users}>

            <div className={S.paginationBox}>
                {pages.map(p => {
                    return (
                        <span
                            key={p}
                            className={`${p === props.currentPage && S.active}`}
                            onClick={changePageHandler(p)}
                        >{p}</span>
                    )
                })}
            </div>

            <h2>USERS</h2>
            <ul className={S.usersList}>
                {props.users.map(u => <User key={u.id} user={u}/>)}
            </ul>

            <button className={S.showMoreButton}>SHOW MORE</button>

        </main>
    )
}