import {
    addMessageActionCreator,
    InitialStateType,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import React from "react";


let AuthRedirectComponent=(props:any)=>{
    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return <Dialogs {...props}/>
}

type MapStateToPropsType = {
    dialogsPage: InitialStateType
    isAuth:boolean


}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}

type MapDispatchToPropsType ={
    addMessage:()=>void,
    updateNewMessageText:(text:string)=>void
}

export type DialogsPropsType=MapStateToPropsType&MapDispatchToPropsType

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer