import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const minLength5 = minLengthCreator(5)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email"
                       name="email"
                       component={Input}
                       validate={[required, minLength5]}/>
            </div>
            <div>
                <Field placeholder="Password"
                       type="password"
                       name="password"
                       component={Input}
                       validate={[required, minLength5]}/>
            </div>
            <div>
                <Field component={Input} name="rememberMe"
                       type="checkbox"/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props:LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
})

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginPropsType=MapStateToPropsType&MapDispatchToPropsType

export default connect(mapStateToProps, {login})(Login)