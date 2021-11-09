import React from "react";
import LoginForm from "./LoginForm";
import LoginReduxForm from "./LoginForm";


const Login: React.FC = (props) => {

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    )
}


export default Login