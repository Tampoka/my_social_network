import {
    addMessageActionCreator,
    InitialStateType,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";
import Dialogs from "./Dialogs";


type MapStateToPropsType = {
    dialogsPage: InitialStateType


}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

type MapDispatchToPropsType = {
    addMessage: () => void,
    updateNewMessageText: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}



export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect) (Dialogs)