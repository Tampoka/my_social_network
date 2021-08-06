import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    let dialogsData=[
        {id:1,name:"Dimych"},
        {id:2,name:"Victor"},
        {id:3,name:"Bob"},
        {id:4,name:"John"},
        {id:5,name:"Anna"},
        {id:6,name:"Dennis"},

    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>
            <div className={s.messages}>
                <Message message="How are you?"/>
                <Message message="Are you busy now?"/>
                <Message message="Today I have a party:)"/>
                <Message message="Can you help me with code review today?"/>
                <Message message="Are you going to gim today?"/>
            </div>
        </div>
    );
}

export default Dialogs