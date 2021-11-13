import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    acceptFollow,
    acceptUnFollow,
    follow,
    getUsers,
    InitialStateType,
    setCurrentPage,
    unFollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
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
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    acceptFollow: (userId: number) => void
    acceptUnFollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = {
    acceptFollow,
    acceptUnFollow,
    setCurrentPage,
    getUsers,
    follow,
    unFollow
}


export default compose<React.ComponentType> (connect(mapStateToProps, mapDispatchToProps))(UsersContainer)
