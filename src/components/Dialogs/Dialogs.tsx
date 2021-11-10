import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)
const minLength5 = minLengthCreator(5)

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    ));
    let messagesElements = props.dialogsPage.messages.map((m) => (
        <Message message={m.message} key={m.id}/>
    ));

    /*   const onAddMessage = () => props.addMessage();
       const onMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
           const text = e.currentTarget.value;
           props.updateNewMessageText(text);
       };
   */

    const onSubmit = (formData: AddMessageType) => {
        props.addMessage(formData.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.sendMessage}>
                    <AddMessageReduxForm
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

type AddMessageType = {
    message: string
}


const AddMessageForm: React.FC<InjectedFormProps<AddMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="message"
                    component={Textarea}
                    validate={[required, maxLength10, minLength5]}
                    placeholder="Write a message"
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<AddMessageType>({form: 'dialogsAddMessage'})(AddMessageForm)
export default Dialogs;
