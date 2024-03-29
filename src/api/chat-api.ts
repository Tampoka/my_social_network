import {Optional} from '../pages/Chat/ChatPage';


let subscribers = [] as Array<SubscriberType>
let ws: WebSocket

function createChannel() {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message',messageHandler)
}

const closeHandler = () => {
    console.log('Closed ws')
    setTimeout(createChannel, 3000)
    // TODO: show notification modal on reconnect + send button disable
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessages))
}

export const chatAPI = {
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribers=subscribers.filter(s => s !== callback)
    }
}

type SubscriberType = (messages: IMessage[]) => void

export interface IMessage {
    userId: number,
    userName: string,
    message: string,
    photo: Optional<string>
}