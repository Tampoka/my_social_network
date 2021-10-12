import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from '../../StoreContext';
import Dialogs from "./Dialogs";

const DialogsContainer: React.FC = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState()
                const onAddMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                const onMessageTextChange = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
                return <Dialogs dialogs={state.dialogsPage.dialogs}
                                messages={state.dialogsPage.messages}
                                newMessageText={state.dialogsPage.newMessageText}
                                addMessage={onAddMessage}
                                updateNewMessageText={onMessageTextChange}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer