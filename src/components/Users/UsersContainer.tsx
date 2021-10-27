import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUsersThunkCreator,
    InitialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { usersAPI} from "../../api/api";


class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
       /* this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)

            })*/
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null
            }
            <Users {...this.props}
                   onPageChanged={this.onPageChanged}
                   users={this.props.usersPage.users}/>
        </>
    }

}

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress:(isFetching:boolean, userId:number) =>void
    getUsersThunkCreator:(currentPage:number, pageSize:number)=>void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)