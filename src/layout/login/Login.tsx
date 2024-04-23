import React, {FC, useState} from 'react'
import S from './Login.module.css'
import {SubmitHandler, useForm} from 'react-hook-form'
import {AxiosContainerResponseType, LoginResponseType} from '../../api/auth-api'

//========================================================================================

type FormType = {
    email: string
    password: number
    checkbox: boolean
}

type LoginPropsType = {
    authLoginTC: (email: string, password: number, rememberMe: boolean, captcha: boolean) => Promise<AxiosContainerResponseType<LoginResponseType>>
    isAuth: boolean
}

//========================================================================================
export const Login: FC<LoginPropsType> = (props) => {

    const [authErrorFromServer, setAuthErrorFromServer] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, formState: {errors, isValid, isDirty}, reset} = useForm<FormType>({mode: 'onChange'})

    const onSubmitHandler: SubmitHandler<FormType> = (data) => {
        setIsLoading(true)
        setAuthErrorFromServer('')
        props.authLoginTC(data.email, data.password, data.checkbox, true)
            .then(() => reset())
            .catch((error) => error && error.message && setAuthErrorFromServer(error.message.replace('Error: ', '')))
            .finally(() => setIsLoading(false))
    }

    return (
        <div className={S.loginForm}>

            <form onSubmit={handleSubmit(onSubmitHandler)}>

                <div className={S.formGroup}>
                    <label htmlFor="login">EMAIL</label>
                    <input
                        type="text"
                        id="login"
                        disabled={isLoading}
                        {...register('email',
                            {
                                required: 'email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'invalid email'
                                }
                            }
                        )}
                    />
                    <span>{errors.email?.message}</span>
                </div>

                <div className={S.formGroup}>
                    <label htmlFor="password">PASSWORD</label>
                    <input
                        type="password"
                        id="password"
                        disabled={isLoading}
                        {...register('password',
                            {
                                required: 'password is required',
                                minLength: {value: 4, message: 'Minimum password length is 4'}
                            }
                        )}
                    />
                    <span>{errors.password?.message}</span>
                </div>

                <div className={`${S.formGroup} ${S.lastFormGroup}`}>
                    <input
                        type="checkbox"
                        id="rememberMe"
                        disabled={isLoading}
                        {...register('checkbox')}
                    />
                    <label htmlFor="rememberMe">REMEMBER ME</label>
                </div>

                <button type="submit"
                        className={(!isValid && isDirty) ? `${S.loginButtonDisabled} ${S.loginButton}` : S.loginButton}
                        disabled={(!isValid && isDirty) || isLoading}
                >
                    IN
                </button>

                {authErrorFromServer && <div className={S.authErrorFromServer}>{authErrorFromServer}</div>}

            </form>

        </div>
    )
}