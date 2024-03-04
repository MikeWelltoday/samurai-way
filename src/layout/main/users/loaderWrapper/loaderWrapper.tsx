import React from 'react'
import {Loader} from '../../../../components/loader/Loader'
import S from './LoaderWrapper.module.css'

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const LoaderWrapper = () => {
    return (
        <main className={S.loadWrapper}>
            <Loader/>
        </main>
    )
}