import React, {FC} from 'react';

const ws=new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: FC = () => {

    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    )
}

const Messages: FC = () => {
    const messages: any = [1, 2, 3, 4]
    return (
        <div style={{height:400,overflowY:'auto'}}>
            {messages.map((m: any,i:number) => <Message key={i}/>)}
            {messages.map((m: any,i:number) => <Message key={i}/>)}
            {messages.map((m: any,i:number) => <Message key={i}/>)}

        </div>
    )
}

const AddMessageForm: FC = () => {

    return (
        <div>
            <div><textarea></textarea></div>
            <div>
                <button>Send</button>
            </div>
        </div>
    )
}

const Message: FC = () => {
    const message = {
        url: 'https://via.placeholder.com/30',
        author: 'Tampoka',
        text: 'Hello,friends!'
    }
    return (
        <div>
            <img src={message.url}/> <b>{message.author}</b>
            <br/>
            {message.text}
            <hr/>
        </div>
    )
}

export default ChatPage
