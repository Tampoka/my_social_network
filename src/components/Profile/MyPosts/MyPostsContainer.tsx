import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsContainerPropsType = {
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    return <StoreContext.Consumer>
        {
            (store) => {
            const state = store.getState()
            const onAddPost = () => store.dispatch(addPostActionCreator())
            const onPostTextChange = (text: string) => {
            store.dispatch(updateNewPostTextActionCreator(text))
        }
            return <MyPosts updateNewPostText={onPostTextChange}
            addPost={onAddPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
        }
        }
            </StoreContext.Consumer>
    }
            export default MyPostsContainer