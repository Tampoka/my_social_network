import {
    addMessageActionCreator,
    InitialStateType,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

const AuthRedirectComponent=withAuthRedirect((Dialogs))
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer