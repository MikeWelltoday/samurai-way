import React, {FC} from 'react'
import {UsersType} from '../../../../redux'
import S from './Users.module.css'
import {User} from '../user/User'
import {Paginator} from '../../../../shared'


type UsersClassType = {
    users: UsersType[]
    currentPage: number
    pageSize: number
    totalUsersCount: number

    changePageHandler: (newPageNumber: number) => void
    usersSetCurrentPage: (newPageNumber: number) => void
}


export const Users: FC<UsersClassType> = (props) => {

    return (
        <main className={S.users}>

            <Paginator
                currentPage={props.currentPage}
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                changePageHandler={props.changePageHandler}
                usersSetCurrentPage={props.usersSetCurrentPage}
            />

            <h2>USERS</h2>
            <ul className={S.usersList}>
                {props.users.map(u => <User key={u.id} user={u}/>)}
            </ul>

            <button className={S.showMoreButton}>SHOW MORE</button>

        </main>
    )
}