import React from 'react'
import S from './Login.module.css'

//========================================================================================

export const Login = () => {
    return (
        <div className={S.loginForm}>
            <form>
                <div className={S.formGroup}>
                    <label htmlFor="login">LOGIN</label>
                    <input type="text" id="login" name="login"/>
                </div>
                <div className={S.formGroup}>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <div className={`${S.formGroup} ${S.lastFormGroup}`}>
                    <input type="checkbox" id="rememberMe" name="rememberMe"/>
                    <label htmlFor="rememberMe">REMEMBER ME</label>
                </div>
                <button type="submit" className={S.loginButton}>IN</button>
            </form>
        </div>
    )
}