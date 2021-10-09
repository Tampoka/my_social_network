import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType, addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/store";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => props.dispatch(addPostActionCreator())

    const onPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        let text=e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your thoughts'
                              value={props.newPostText}
                              onChange={onPostTextChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts