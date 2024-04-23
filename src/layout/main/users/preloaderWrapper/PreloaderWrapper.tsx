import React from 'react'
import {Loader} from '../../../../shared/ui/loader/Loader'
import S from './PreloaderWrapper.module.css'

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const PreloaderWrapper = () => {
    return (
        <main className={S.loadWrapper}>
            <Loader/>
        </main>
    )
}