import React from "react";
import s from './Header.module.css'

const Header:React.FC=()=> {
    return <header className={s.header}>
        <img src='http://www.logobook.com/wp-content/uploads/2016/10/Community_Builders_and_Building_Materials_logo.svg' alt='logo'/>

        <div className={s.loginBlock}>Login</div>
    </header>
    }

export default Header