import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
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
                <DialogItem name="Dennis" id={6}/>
            </div>
            <div className={s.messages}>
                <Message message="How are you?"/>
                <Message message="Are you busy now?"/>
                <Message message="Today I have a party:)"/>
                <Message message="Can you help me with code review today?"/>
                <Message message="Are you going to gim today?"/>
            </div>
        </div>
    );
}

export default Dialogs