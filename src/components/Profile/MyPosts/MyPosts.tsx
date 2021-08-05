import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My Posts
            <div>
                <textarea placeholder={'Enter your thoughts'}></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message={'How are you?'} likesCount={19}/>
                <Post message={'Where have you been?'} likesCount={114}/>
            </div>
        </div>
    )
}

export default MyPosts