import React, {FC} from 'react'
import S from './Loader.module.css'

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const Preloader: FC = () => {
    return (
        <div className={S.loader}></div>
    )
}
