import React from 'react'
import S from './Post.module.css'


//============================================================================================================
//=> IMAGES
import avatar1 from './../../../../assets/images/avatars/avatar-1.webp'

//============================================================================================================


export const Post = () => {
    return (
        <div className={S.post}>
            <img src={avatar1} alt=""/>
            Post
            <div className={S.likeBox}><span>♥</span></div>
        </div>
    )
}