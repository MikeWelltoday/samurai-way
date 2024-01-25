import React from 'react'
import S from './About.module.css'

//============================================================================================================
//=> IMAGES
import image from '../../../../assets/images/content-iamge.webp'


//============================================================================================================

export const About = () => {
    return (
        <div className={S.about}>
            <div className={S.imageBox}>
                <img src={image} alt={'sry'}/>
            </div>
            <div className={S.description}>
                Description about me...
            </div>
        </div>

    )
}