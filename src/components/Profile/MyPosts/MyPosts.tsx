import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: any
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    const onPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action = {
            type: "UPDATE-NEW-POST-TEXT",
            newText: e.currentTarget.value
        };
        props.dispatch(action)
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