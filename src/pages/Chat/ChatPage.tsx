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
        let ws: WebSocket
        const closeHandler = () => {
            setTimeout(createChannel, 3000)
            console.log('Closed ws')
        }

        function createChannel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChannel()
        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </div>
    )
}

export type MessagesProps = {
    wsChannel: Optional<WebSocket>
}

const Messages = ({wsChannel}: MessagesProps) => {
    const [messages, setMessages] = useState<IMessage[]>([])

    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }
        wsChannel?.addEventListener('message', messageHandler)
        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])

    return (
        <div style={{height: 400, overflowY: 'auto'}}>
            {messages.map((m: any) => <Message key={m.userId} message={m}/>)}
        </div>
    )
}

const AddMessageForm: FC<{ wsChannel: Optional<WebSocket> }> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const sendMessage = () => {
        wsChannel?.send(message)
        setMessage('')
    }

    useEffect(() => {
        const openHandler = () => {
            setReadyStatus('ready')
        }
        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }

    }, [wsChannel])

    return (
        <div>
            <div><textarea
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}
                        disabled={wsChannel == null && (readyStatus !== 'ready' || !message)}>Send
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
