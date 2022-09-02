import React, {FC, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

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
    const [wsChannel, setWsChannel] = useState<Optional<WebSocket>>(null)

    useEffect(() => {
        function createChannel() {
            let ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', () => {
                createChannel()
            })
            setWsChannel(ws)
        }

        createChannel()
    }, [])

    return (
        <div>
            <Messages ws={wsChannel}/>
            <AddMessageForm ws={wsChannel}/>
        </div>
    )
}

export type MessagesProps = {
    ws: Optional<WebSocket>
}

const Messages = ({ws}: MessagesProps) => {
    const [messages, setMessages] = useState<IMessage[]>([])

    useEffect(() => {
        ws?.addEventListener('message', (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [ws])

    return (
        <div style={{height: 400, overflowY: 'auto'}}>
            {messages.map((m: any) => <Message key={m.userId} message={m}/>)}
        </div>
    )
}

const AddMessageForm: FC<{ ws: Optional<WebSocket> }> = ({ws}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const sendMessage = () => {
        ws?.send(message)
        setMessage('')
    }

    useEffect(() => {
        ws?.addEventListener('open', () => {
            setReadyStatus('ready')
        })
    }, [ws])

    return (
        <div>
            <div><textarea
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}
                        disabled={ws == null && (readyStatus !== 'ready' || !message)}>Send
                </button>
            </div>
        </div>
    )
}

export type MessageProps = {
    message: IMessage
}

const Message = ({message}: MessageProps) => {
    const fullName = useSelector<AppStateType, string | null>(state => state.profilePage.profile!.fullName)

    const deleteMessage = (messageId: number) => {
    }
    return (
        <div>
            {message.photo ?
                <p style={{display: 'flex', alignItems: 'center'}}><img
                    src={message.photo} style={{width: '30px'}} alt='user'/>
                    <b>{message.userName}</b>
                </p> :
                <span>No photo</span>}
            {message.message}
            {message.userName === fullName && <div>
                <button>Delete</button>
            </div>}
            <hr/>
        </div>
    )
}

export default ChatPage
