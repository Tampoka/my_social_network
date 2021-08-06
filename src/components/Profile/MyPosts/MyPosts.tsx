import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData=[
        {id:1, message:"How are you?",likesCount:19},
        {id:2, message:"Where have you been?",likesCount:3},
        {id:3, message:"Pics from our party yesterday",likesCount:8},
        {id:4, message:"How important is to be proactive?",likesCount:27},
        {id:5, message:"What are your goals for today, for this week?",likesCount:54},
    ]
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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
                <Post message={postsData[4].message} likesCount={postsData[4].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts