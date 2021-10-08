import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
    addMessage:()=>void
    updateNewMessageText:(newText: string) => void
}
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const onAddMessage = () => props.addMessage()
    const onMessageTextChange=()=>{
        props.updateNewMessageText(newMessageElement.current!.value)
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
                              ref={newMessageElement}
                              onChange={onMessageTextChange}
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