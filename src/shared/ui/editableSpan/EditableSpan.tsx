import React, {ChangeEvent, FC, useState, KeyboardEvent} from 'react'
import S from './EditableSpan.module.css'

type EditableSpanPropsType = {
    value: string
    isAbleToBeEdited: boolean

    updateCallBackFnc: (newValue: string) => void
}

export const EditableSpan: FC<EditableSpanPropsType> = (props) => {

    const [value, setValue] = useState(props.value)
    const [editMode, setEditMode] = useState(false)


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

    const editModeON = () => props.isAbleToBeEdited && setEditMode(true)

    function editModeOFF() {
        if (value !== props.value) {
            if (value.trim()) {
                props.updateCallBackFnc(value)
            } else {
                setValue(props.value)
            }
        }
        setEditMode(false)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter') && editModeOFF()


    const isMyValue = props.isAbleToBeEdited ? `${S.valueAbleToBeEdited} ${S.editableSpan}` : `${S.editableSpan}`

    return (
        <>
            {!editMode ?
                <span
                    className={isMyValue}
                    onDoubleClick={editModeON}
                >{props.value}</span>
                :
                <input
                    className={isMyValue}
                    type="text"
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={editModeOFF}
                    autoFocus={true}
                    onKeyDown={onKeyDownHandler}
                />
            }
        </>
    )
}
