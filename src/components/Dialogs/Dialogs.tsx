import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: any
}
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    const onAddMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"})
    }
    const onMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action = {
            type: "UPDATE-NEW-MESSAGE-TEXT",
            newText: e.currentTarget.value
        };
        props.dispatch(action)
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
                              value={props.state.newMessageText}
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