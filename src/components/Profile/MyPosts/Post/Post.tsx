import React from "react";
import s from './Post.module.css'

type postPropsType={
    message:String
    likesCount:Number
}
const Post = (props:postPropsType) => {
    // console.log(props.likeCount)
    return <div className={s.posts}>
        <div className={s.item}><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQ4aNPrI7S0ZcOI0gguCobJyLVkc7osIoaQ&usqp=CAU"
            alt=""/>{props.message}
        </div>
        <div><span>Like</span><span> {props.likesCount}</span></div>
    </div>
}

export default Post