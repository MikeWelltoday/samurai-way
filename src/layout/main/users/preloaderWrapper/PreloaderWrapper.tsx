import React from 'react'
import {Preloader} from '../../../../components/loader/Preloader'
import S from './PreloaderWrapper.module.css'

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const PreloaderWrapper = () => {
    return (
        <main className={S.loadWrapper}>
            <Preloader/>
        </main>
    )
}