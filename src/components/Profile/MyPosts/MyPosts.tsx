import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostPType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostPType[]
    newPostText:string
    addPostCallback: () => void
    updateNewPostText:(newText:string)=>void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPostCallback()
        props.updateNewPostText("")
    }

    const onPostTextChange = () => {
        props.updateNewPostText(newPostElement.current!.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your thoughts'
                              ref={newPostElement}
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