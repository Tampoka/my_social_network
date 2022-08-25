import React, {FC, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export interface IMessage {
    userId: number,
    userName: string,
    message: string,
    photo: string
}

const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: FC = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            setMessages(JSON.parse(e.data))
        })
    }, [])
    return (
        <div>
            <Messages messages={messages}/>
            <AddMessageForm/>
        </div>
    )
}

export type MessagesProps = {
    messages: IMessage[]
}

const Messages = ({messages}: MessagesProps) => {
    return (
        <div style={{height: 400, overflowY: 'auto'}}>
            {messages.map((m: any) => <Message key={m.userId} message={m}/>)}

        </div>
    )
}

const AddMessageForm: FC = () => {
const user=useSelector<AppStateType,string|null>(state=>state.auth.login)
    const messageRef=useRef<HTMLTextAreaElement>()
    const [message,setMessage]=useState('')
    const sendMessage=()=>{

    }
    console.log(message)
    return (
        <div>
            <div><textarea ref={messageRef} onChange={()=>setMessage(messageRef.current?.value!)}></textarea></div>
            <div>
                <button>Send</button>
            </div>
        </div>
    )
}

export type MessageProps = {
    message: IMessage
}

const Message = ({message}: MessageProps) => {
    return (
        <div>
            <img src={message.photo}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

export default ChatPage
