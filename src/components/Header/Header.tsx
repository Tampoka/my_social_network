import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {HeaderPropsType} from "./HeaderContainer";

const Header: React.FC<HeaderPropsType> = (props) => {
    return <header className={s.header}>
        <img src='http://www.logobook.com/wp-content/uploads/2016/10/Community_Builders_and_Building_Materials_logo.svg'
             alt='logo'/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <>
                        <div className={s.userName}>{props.login}</div>
                        <button onClick={props.logout} className={s.logout}>Log out</button>
                </>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header