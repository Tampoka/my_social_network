import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../FormControls/FormControls";
import {minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from "./../FormControls/FormControls.module.css"

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha:string|null
}

const minLength5 = minLengthCreator(5)

const LoginForm: React.FC<InjectedFormProps<FormDataType> & { captchaUrl: string | null }> = ({
                                                                                                  handleSubmit,
                                                                                                  error,
                                                                                                  captchaUrl
                                                                                              }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [required, minLength5])}
            {createField("Password", "password", Input, [required, minLength5], {type: "password"})}
            {createField("", "rememberMe", Input, [], {type: "checkbox"}, "remember me")}

            {captchaUrl&& <div>
                <img src={captchaUrl} alt="captcha"/>
                {createField('Symbols from image', "captcha", Input, [required])}
            </div>}
            {error &&
            <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

// @ts-ignore
const LoginReduxForm = reduxForm<FormDataType, { captchaUrl: string | null }>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean,captcha:string|null) => void
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {login})(Login)