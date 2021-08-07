import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile=()=> {
      let posts = [
       {id: 1, message: "How are you?", likesCount: 19},
       {id: 2, message: "Where have you been?", likesCount: 3},
       {id: 3, message: "Pics from our party yesterday", likesCount: 8},
       {id: 4, message: "How important is to be proactive?", likesCount: 27},
       {id: 5, message: "What are your goals for today, for this week?", likesCount: 54},
   ]
    return  <div>
       <ProfileInfo/>
       <MyPosts posts={posts}/>
    </div>
    }

export default Profile