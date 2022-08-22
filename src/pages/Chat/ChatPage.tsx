import React, {FC} from 'react';

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

    return (
        <div>
            messages
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

export default ChatPage
