import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {UsersContainerPropsType} from "./UsersContainer";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

export type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
}
const Users: React.FC<UsersContainerPropsType & UsersPropsType> = ({
                                                                       currentPage,
                                                                       pageSize,
                                                                       onPageChanged,
                                                                       totalUsersCount,
                                                                       users,
                                                                       ...props
                                                                   }) => {
    return <div className={s.usersContainer}>
        <div className={s.users}>
            <Paginator onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       portionSize={10}/>
            {
                users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                                     follow={props.follow} unFollow={props.unFollow}/>)
            }

        </div>
        <button>Show More</button>
    </div>
}

export default Users