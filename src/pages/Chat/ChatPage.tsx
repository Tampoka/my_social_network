import React, {FC, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export interface IMessage {
    userId: number,
    userName: string,
    message: string,
    photo: Optional<string>
}

export type Optional<T> = T | null

const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([])

    useEffect(() => {
        ws.addEventListener('message', (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
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
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        ws.send(message)
        setMessage('')
    }

    console.log(message)
    return (
        <div>
            <div><textarea
                onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
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
            {message.photo ?
                <p style={{display: 'flex', alignItems: 'center'}}><img
                    src={message.photo} style={{width: '30px'}} alt='user'/>
                    <b>{message.userName}</b>
                </p> :
                <span>No photo</span>}
            {message.message}
            <hr/>
        </div>
    )
}

export default ChatPage
