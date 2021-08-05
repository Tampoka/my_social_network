import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts";
const Profile=()=> {
    return  <div>
        <img
            src="https://s27389.pcdn.co/wp-content/uploads/2019/12/why-network-segmentation-essential-enterprise-1024x440.jpeg"
            alt=""/>
        <div>
            <img className={s.avatar}
                 src="https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg" alt=""/>
        </div>
       <MyPosts/>
    </div>
    }

export default Profile