import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import {FriendType} from "../../redux/sidebar-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


const Nav: React.FC<MapStateToPropsType> = (props) => {
    return <div className={s.navContainer}>
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/chat" activeClassName={s.active}>Chat</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
        <Friends friends={props.friends}/>
    </div>

};
type MapStateToPropsType = {
    friends: FriendType[]
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    friends: state.sidebar.friends
})

export default connect(mapStateToProps, {})(Nav);
