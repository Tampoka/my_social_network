import React from "react";
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength10 = maxLengthCreator(10)
const minLength5 = minLengthCreator(5)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login"
                       name="login"
                       component={Input}
                       validate={[required, maxLength10, minLength5]}/>
            </div>
            <div>
                <Field placeholder="Password"
                       name="password"
                       component={Input}
                       validate={[required]}/>
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

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login