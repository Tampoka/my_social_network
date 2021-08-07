import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Victor"},
        {id: 3, name: "Bob"},
        {id: 4, name: "John"},
        {id: 5, name: "Anna"},
        {id: 6, name: "Dennis"},
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages = [
        {id: 1, message: "How are you?"},
        {id: 2, message: "Are you busy now?"},
        {id: 3, message: "Today I have a party:)"},
        {id: 4, message: "Can you help me with code review today?"},
        {id: 5, message: "Are you going to gim today?"},
    ]
    let messagesElements = messages.map(m => <Message message={m.message}/>)
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