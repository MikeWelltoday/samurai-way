import React, {FC} from 'react'
import S from './Loader.module.css'

//========================================================================================

export const Preloader: FC = () => {
    return (
        <div className={S.loader}></div>
    )
}
