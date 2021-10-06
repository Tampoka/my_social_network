import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostPropsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostPropsType[]
}

const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {
        alert(newPostElement.current?.value)


    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your thoughts' ref={newPostElement}></textarea>
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