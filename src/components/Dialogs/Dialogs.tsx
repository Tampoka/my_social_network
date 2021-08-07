import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsPropsType=DialogMessagePropsType
type DialogMessagePropsType={
    dialogs: Array<DialogPropsType>
    messages:Array<MessagePropsType>
}
type DialogPropsType={
    id:number
    name:string
}
type MessagePropsType={
    id:number
    message:string
}
const Dialogs = (props:DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

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