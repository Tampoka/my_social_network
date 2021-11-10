import {
    addMessageActionCreator,
    InitialStateType,
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
    addMessage: (message:string) => void,
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (message:string) => {
            dispatch(addMessageActionCreator(message))
        }
    }
}



export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect) (Dialogs)