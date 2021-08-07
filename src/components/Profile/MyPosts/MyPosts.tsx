import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostsPropsType= {
    posts:Array<PostPropsType>
}
type PostPropsType={
    id:number
    message:string
    likesCount:number
}
const MyPosts = (props:MyPostsPropsType) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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