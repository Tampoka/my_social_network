import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => props.addPost()

    const onPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your thoughts'
                              value={props.profilePage.newPostText}
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