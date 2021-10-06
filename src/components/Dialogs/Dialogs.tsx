import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsPropsType = {
    state: statePropsType
}
type statePropsType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
}
type DialogPropsType = {
    id: number
    name: string
}
type MessagePropsType = {
    id: number
    message: string
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => alert(newMessageElement.current?.value)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.sendMessage}>
                    <textarea placeholder={"Write a message"}
                              ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs