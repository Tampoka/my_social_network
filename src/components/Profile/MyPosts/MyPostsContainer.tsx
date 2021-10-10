import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";
import {ActionsType, addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    const onAddPost = () => props.dispatch(addPostActionCreator())

    const onPostTextChange = (text: string) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return <MyPosts updateNewPostText={onPostTextChange}
                    addPost={onAddPost}
                    posts={props.posts}
                    newPostText={props.newPostText}/>
}

export default MyPosts