import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength10 = maxLengthCreator(10)
const minLength5 = minLengthCreator(5)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email"
                       name="email"
                       component={Input}
                       validate={[required, maxLength10, minLength5]}/>
            </div>
            <div>
                <Field placeholder="Password"
                       name="password"
                       component={Input}
                       validate={[required, maxLength10, minLength5]}/>
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

const Login = (props:MapDispatchToPropsType) => {
    const onSubmit = (formData: FormDataType) => {
       props.login(formData.email,formData.password,formData.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type MapDispatchToPropsType = {
    login: (email:string,password:string,rememberMe:boolean) =>void
}

export default connect (null,{login})(Login)