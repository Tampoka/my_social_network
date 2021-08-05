import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props: DialogItemPropsType) => {
    let path="/dialogs/"+props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
type DialogItemPropsType = {
    name: string
    id: number
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Dimych" id={1}/>
                <DialogItem name="Victor" id={2}/>
                <DialogItem name="Bob" id={3}/>
                <DialogItem name="John" id={4}/>
                <DialogItem name="Anna" id={5}/>
                <DialogItem name="Dennis" id={5}/>
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