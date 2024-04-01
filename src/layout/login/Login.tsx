import React, {FC} from 'react'
import S from './Login.module.css'
import {useForm, SubmitHandler} from 'react-hook-form'
import {Redirect} from 'react-router-dom'

//========================================================================================

type FormType = {
    login: string
    password: number
    checkbox: boolean
}

type LoginPropsType = {
    authLoginTC: (email: string, password: number, rememberMe: boolean, captcha: boolean) => void
    isAuth: boolean
}

//========================================================================================
export const Login: FC<LoginPropsType> = (props) => {

    // if (props.isAuth) {
    //     return <Redirect to={'/profile/:userId'}/>
    // }

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormType>()
    const onSubmitHandler: SubmitHandler<FormType> = (data) => {
        console.log(data)
        props.authLoginTC(data.login, data.password, data.checkbox, true)
        reset()
    }

    return (
        <div className={S.loginForm}>

            <form onSubmit={handleSubmit(onSubmitHandler)}>

                <div className={S.formGroup}>
                    <label htmlFor="login">LOGIN</label>
                    <input
                        type="text"
                        id="login"
                        {...register('login', {
                            required: 'login is required'
                        })}
                    />
                    <span>{errors.login?.message}</span>
                </div>

                <div className={S.formGroup}>
                    <label htmlFor="password">PASSWORD</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: 'password is required',
                            minLength: {value: 4, message: 'Minimum password length is 4'}
                        })}
                    />
                    <span>{errors.password?.message}</span>
                </div>

                <div className={`${S.formGroup} ${S.lastFormGroup}`}>
                    <input
                        type="checkbox"
                        id="rememberMe"
                        {...register('checkbox')}
                    />
                    <label htmlFor="rememberMe">REMEMBER ME</label>
                </div>

                <button type="submit" className={S.loginButton}>IN</button>

            </form>
        </div>
    )
}