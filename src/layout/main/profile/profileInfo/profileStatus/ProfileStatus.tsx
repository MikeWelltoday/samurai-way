import React, {ChangeEvent, FC, KeyboardEvent, useEffect, useState} from 'react'
import S from './ProfileStatus.module.css'


type PropsType = {
    status: string
    isStatusChangeable: boolean
    updateStatus: (newStatus: string) => void
}

export const ProfileStatus: FC<PropsType> = (props) => {

    const [statusValue, setStatusValue] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    // вдруг компонента отрисуется, а данные с сервера придут чуть позже
    // чтобы данные изменились нужно на них подписатсья
    useEffect(() => {
        setStatusValue(props.status)
    }, [props.status])

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setStatusValue(event.currentTarget.value)

    const editModeON = () => props.isStatusChangeable && setEditMode(true)

    function editModeOFF() {
        if (statusValue !== props.status) {
            if (statusValue.trim()) {
                props.updateStatus(statusValue)
            } else {
                setStatusValue(props.status)
            }
        }
        setEditMode(false)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter') && editModeOFF()

    const isMyStatus = props.isStatusChangeable ? `${S.myStatus}` : ''

    return (
        <div className={S.profileStatus}>

            {!editMode ?
                <span
                    className={isMyStatus}
                    onDoubleClick={editModeON}
                >{props.status}</span>
                :
                <input
                    className={isMyStatus}
                    type="text"
                    value={statusValue}
                    onChange={onChangeHandler}
                    onBlur={editModeOFF}
                    autoFocus={true}
                    onKeyDown={onKeyDownHandler}
                />
            }

        </div>
    )
}