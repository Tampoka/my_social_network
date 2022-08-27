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
        ws.addEventListener('message', (e:MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages)=>[...prevMessages,...newMessages])
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
    const userName = useSelector<AppStateType, Optional<string>>(state => state.profilePage.profile!.fullName)
    const userId = useSelector<AppStateType, Optional<number> | null>(state => state.profilePage.profile!.userId)
    const photo = useSelector<AppStateType, Optional<string> | null>(state => state.profilePage.profile!.photos.small)
    const messageRef = useRef<HTMLTextAreaElement>(null)
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        const newMessage: IMessage = {
            userName: userName || 'Anonymous',
            userId: userId!,
            photo,
            message
        }
        console.log(newMessage)
    }

    return (
        <div>
            <div><textarea ref={messageRef}
                           onChange={() => setMessage(messageRef.current?.value!)}></textarea>
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
                <p style={{display:'flex',alignItems:'center'}}><img src={message.photo} style={{width: '30px'}} alt='user'/>
                    <b>{message.userName}</b>
                </p> :
                <span>No photo</span>}
            {message.message}
            <hr/>
        </div>
    )
}

export default ChatPage
