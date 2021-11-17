import {addPost, PostType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: PostType[]
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

type MapDispatchToPropsType = {
    addPost: (post:string) => void,
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const MyPostsContainer = connect(mapStateToProps, {
    addPost})(MyPosts)

export default MyPostsContainer