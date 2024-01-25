import React, {FC} from 'react'
import S from './Post.module.css'
import {postsPropsTypes} from './Post.types'


//============================================================================================================
//=> IMAGES
import avatar1 from '../../../../../assets/images/avatars/avatar-1.webp'


//============================================================================================================


export const Post: FC<postsPropsTypes> = (props) => {
    return (
        <div className={S.post}>
            <img src={avatar1} alt=""/>
            {props.message}
            <div className={S.likeBox}><span>♥</span>{props.likesCount}</div>
        </div>
    )
}