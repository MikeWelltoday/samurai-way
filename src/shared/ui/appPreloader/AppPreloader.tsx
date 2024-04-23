import React from 'react'
import S from './AppPreloader.module.css'

export const AppPreloader = () => {
    return (
        <div className={S.appPreloader}>
            <div className={S.spinner}></div>
        </div>
    )
}




