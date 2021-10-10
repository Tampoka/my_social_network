import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
   store:StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

        const state=props.store.getState()
    const onAddPost = () => props.store.dispatch(addPostActionCreator())

    const onPostTextChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return <MyPosts updateNewPostText={onPostTextChange}
                    addPost={onAddPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
}

export default MyPosts