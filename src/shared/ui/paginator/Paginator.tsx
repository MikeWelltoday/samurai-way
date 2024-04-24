import React, {FC} from 'react'
import S from './Paginator.module.css'

type PropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number

    changePageHandler: (newPageNumber: number) => void
    usersSetCurrentPage: (newPageNumber: number) => void
}

export const Paginator: FC<PropsType> = (props) => {

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
        <div className={S.paginator}>
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
    )
}