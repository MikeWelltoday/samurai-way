import React, {FC, useState} from 'react'
import S from './Paginator.module.css'

type PropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number

    changePageHandler: (newPageNumber: number) => void
    usersSetCurrentPage: (newPageNumber: number) => void
}

export const Paginator: FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    function changePageHandler(newPageNumber: number) {
        return () => {
            props.usersSetCurrentPage(newPageNumber)
            props.changePageHandler(newPageNumber)
        }
    }


    // ОГРАНИЕЧЕНИЕ ПОКАЗЫВАЕМЫХ СТРАНИЦ
    const portionSize = 15 // устанавливем количество отображаемых страниц
    const portionCount = Math.ceil(pagesCount / portionSize) // расчитываем сколько всего будет блоков страничных
    const [portionNumber, setPortionNumber] = useState(1) // номер блока страниц НА ДАННЫЙ МОМЕНТ отображаемых
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1 // интервал слева
    const rightPortionPageNumber = leftPortionPageNumber + portionSize // интервал справа

    const filteredPages = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber) // показывать только страницы в интервале


    return (
        <div className={S.paginator}>


            {/* left button */}
            {
                portionNumber > 1 &&
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>
                    <span>{'<'}</span>
                </button>
            }


            {filteredPages.map(p => {
                return (
                    <span
                        key={p}
                        className={`${p === props.currentPage && S.active}`}
                        onClick={changePageHandler(p)}
                    >{p}</span>
                )
            })}


            {/* right button */}
            {
                portionCount > portionNumber &&
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>
                    <span>{'>'}</span>
                </button>
            }


        </div>
    )
}