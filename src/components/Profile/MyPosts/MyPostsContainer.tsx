import {addPost, InitialStateType, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: InitialStateType
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

type MapDispatchToPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const MyPostsContainer = connect(mapStateToProps, {
    addPost, updateNewPostText})(MyPosts)

export default MyPostsContainer