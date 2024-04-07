import React, {FC} from 'react'
import S from './MessageForm.module.css'
import {SubmitHandler, useForm} from 'react-hook-form'

type MessageFormPropsType = {
    dialogsReducerAddMessageAC: (message: string) => void
}

type FormType = {
    message: string

}

export const MessageForm: FC<MessageFormPropsType> = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormType>()
    const onSubmitHandler: SubmitHandler<FormType> = (data) => {
        props.dialogsReducerAddMessageAC(data.message)
        reset()
    }


    return (
        <form className={S.messageForm} onSubmit={handleSubmit(onSubmitHandler)}>
            <textarea
                className={S.textarea}
                placeholder="Введите ваше сообщение..."
                {...register('message', {
                    required: 'message is required',
                    validate: value => value.trim() !== '' || 'Password cannot consist of only spaces'
                })}
            />
            <span className={S.error}>{errors.message?.message}</span>
            <button className={S.button} type="submit">SEND</button>
        </form>
    )
}