import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";


type DialogsContainerPropsType = {
    store: StoreType
}
const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    const state = props.store.getState()

    const onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onMessageTextChange = (text:string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Dialogs dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageText={state.dialogsPage.newMessageText}
                    addMessage={onAddMessage}
                    updateNewMessageText={onMessageTextChange}/>

}

export default DialogsContainer