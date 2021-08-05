import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs= ()=> {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                   <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">John</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Bob</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello,how are you?</div>
                <div className={s.message}>
                    Are you busy now?
                </div>
                <div className="message">
                    Today I have a party:)
                </div>
            </div>
        </div>
    );
}

export default Dialogs