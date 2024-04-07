import React, {FC} from 'react'
import S from './PostForm.module.css'
import {SubmitHandler, useForm} from 'react-hook-form'

type PostFormPropsType = {
    profileReducerAddPostAC: (message: string) => void
}

type FormType = {
    message: string

}

export const PostForm: FC<PostFormPropsType> = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormType>()
    const onSubmitHandler: SubmitHandler<FormType> = (data) => {
        props.profileReducerAddPostAC(data.message)
        reset()
    }

    return (
        <form className={S.postForm} onSubmit={handleSubmit(onSubmitHandler)}>
                <textarea
                    placeholder={'make a post'}
                    {...register('message', {
                        required: 'message is required',
                        validate: value => value.trim() !== '' || 'Password cannot consist of only spaces'
                    })}
                />
            <span className={S.error}>{errors.message?.message}</span>
            <div>
                <button type="submit">add post</button>
            </div>
        </form>
    )
}
