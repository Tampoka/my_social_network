import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs: React.FC<DialogsPropsType> = (props) => {
// let props.DialogPage=state
    let dialogsElements =props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const onAddMessage = () => props.addMessage()
    const onMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text= e.currentTarget.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.sendMessage}>
                    <div>
                    <textarea placeholder={"Write a message"}
                              onChange={onMessageTextChange}
                              value={props.dialogsPage.newMessageText}
                    />
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs