import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/reducerUsers";
import Users from "./Users";
import {Preloader} from "../common/preloader/preloader";
import {usersAPI} from "../../api/api";



class UsersAPIContainer extends React.Component <UsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
           this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users onPageChanged={this.onPageChanged} users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow} totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   FollowingInProgress={this.props.FollowingInProgress}/>
        </>

    }
}

export type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    FollowingInProgress:Array<number>
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers : (users: Array<UserType>) => void
    setCurrentPage:(pageNumber: number) => void
    setTotalUsersCount:(count:number)=>void
    toggleIsFetching:(isFetching:boolean) =>void
    toggleFollowingProgress:(isFetching:boolean, userId:number) =>void
}
export type UsersType=mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        FollowingInProgress:state.usersPage.FollowingInProgress

    }
}

export const UsersContainer = connect(mapStateToProps,  {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
})(UsersAPIContainer)