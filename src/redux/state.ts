
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "How are you?", likesCount: 19},
                {id: 2, message: "Where have you been?", likesCount: 3},
                {id: 3, message: "Pics from our party yesterday", likesCount: 8},
                {id: 4, message: "How important is to be proactive?", likesCount: 27},
                {id: 5, message: "What are your goals for today, for this week?", likesCount: 54},
            ],
            newPostText: "Hello!"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Victor"},
                {id: 3, name: "Bob"},
                {id: 4, name: "John"},
                {id: 5, name: "Anna"},
                {id: 6, name: "Dennis"},
            ],
            messages: [
                {id: 1, message: "How are you?"},
                {id: 2, message: "Are you busy now?"},
                {id: 3, message: "Today I have a party:)"},
                {id: 4, message: "Can you help me with code review today?"},
                {id: 5, message: "Are you going to gim today?"},
            ],
            newMessageText: "How have you been?"
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Bob",
                    img: "https://images.unsplash.com/photo-1600603955656-e3c9e1ad7f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
                    isOnline: true
                },
                {
                    id: 2,
                    name: "Kate",
                    img: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
                    isOnline: false
                },
                {
                    id: 3,
                    name: "John",
                    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
                    isOnline: true
                },

            ]
        }
    },
    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber()

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()

        } else if (action.type === "ADD-MESSAGE") {
            const newMessage: MessageType = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber()

        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    },
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})



export const updateNewPostTextActionCreator = (text: string): UpdateNewPostActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const addMessageActionCreator = (): AddMessageActionType => ( {type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export type AddPostActionType = {
    type: "ADD-POST"
}

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText:string
}

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

export type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText:string
}

export type ActionsType=AddPostActionType|UpdateNewPostActionType|AddMessageActionType|UpdateNewMessageActionType


export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type FriendType = {
    id: number
    name: string
    img: string
    isOnline: boolean
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

export type SidebarType = {
    friends: FriendType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export default store
// window.store=store