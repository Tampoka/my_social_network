import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";


const Users: React.FC<UsersPropsType> = (props: UsersPropsType) => {
    {props.usersPage.users.length<=3&&props.setUsers([
        {
            id: 1,
            fullName: "Kate",
            photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dMYMr1CCTycSQd2YQatl4bvzK5T90Renlw&usqp=CAU",
            status: "I am looking for new job",
            isFollowing: true,
            location: {city: "New York", country: "USA"}
        },
        {
            id: 2,
            fullName: "John",
            photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wvbPOt0gK-5yGATP1Beo7Mkk7LT1M6KZLw&usqp=CAU",
            status: "I am moved to new office",
            isFollowing: true,
            location: {city: "London", country: "Great Britain"}
        },
        {
            id: 3,
            fullName: "Bob",
            photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
            status: "Happiest ever",
            isFollowing: false,
            location: {city: "Melbourne", country: "Australia"}
        },
    ])}
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id} className={s.user}>
                <div>
                    <div className={s.userPhoto}><img src={u.photoUrl} alt="user"/></div>
                    <div>
                        {u.isFollowing
                            ?<button onClick={()=>props.unFollow(u.id)}>UnFollow</button>
                            :<button onClick={()=>props.follow(u.id)}>Follow</button>}

                    </div>
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <span>{u.location.country}</span>
                    <span>{u.location.city}</span>
                </div>
            </div>)
        }
        <button>Show More</button>
    </div>
}

export default Users