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
    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Victor"},
        {id: 3, name: "Bob"},
        {id: 4, name: "John"},
        {id: 5, name: "Anna"},
        {id: 6, name: "Dennis"},
    ]
    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesData = [
        {id: 1, message: "How are you?"},
        {id: 2, message: "Are you busy now?"},
        {id: 3, message: "Today I have a party:)"},
        {id: 4, message: "Can you help me with code review today?"},
        {id: 5, message: "Are you going to gim today?"},
    ]
    let messagesElements = messagesData
        .map(message => <Message message={message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs