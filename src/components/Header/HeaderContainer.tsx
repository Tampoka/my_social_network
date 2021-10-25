import React from "react";
import Header from "./Header";
import axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
               debugger
            })
    }

    render() {
        return <Header/>
    }
}

export default HeaderContainer