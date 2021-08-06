import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "How are you?", likesCount: 19},
        {id: 2, message: "Where have you been?", likesCount: 3},
        {id: 3, message: "Pics from our party yesterday", likesCount: 8},
        {id: 4, message: "How important is to be proactive?", likesCount: 27},
        {id: 5, message: "What are your goals for today, for this week?", likesCount: 54},
    ]
    let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea placeholder={'Enter your thoughts'}></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts