import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

type NavPropsType={
  state:statePropsType
}
type statePropsType={
  friends: FriendPropsType[]
}
type FriendPropsType={
  id:number
  name:string
  img:string
  isOnline:boolean
}

const Nav = (props:NavPropsType) => {
  return <div>
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/settings" activeClassName={s.active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
    <Friends state={props.state}/>
      </div>

};

export default Nav;
