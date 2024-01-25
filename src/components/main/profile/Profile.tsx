import React, {FC} from 'react'
import S from './Profile.module.css'
import {Posts} from './posts/Posts'
import {About} from './about/About'

//============================================================================================================

export const Profile: FC = () => {
    return (
        <main className={S.profile}>
            <About/>
            <Posts/>
        </main>
    )
}


