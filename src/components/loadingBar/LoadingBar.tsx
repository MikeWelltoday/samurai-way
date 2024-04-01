import React from 'react'
import S from './LoadingBar.module.css' // Подключаем файл стилей

export const LoadingBar = () => {
    return (
        <div className={S.loadingBar}>
            <div className={S.progressBar}></div>
        </div>
    )
}