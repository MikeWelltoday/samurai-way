import React, {FC} from 'react'
import S from './ProfileStatus.module.css'

//========================================================================================

type ProfileStatusPropsType = {
    status: string
}

//========================================================================================

export const ProfileStatus: FC<ProfileStatusPropsType> = (props) => {
    return (
        <>
            <span>
                {props.status}
            </span>

            <input type="text"/>

        </>
    )
}