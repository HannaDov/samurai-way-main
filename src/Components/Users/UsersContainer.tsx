import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../redux/reducerUsers";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../common/preloader/preloader";

type ResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}
class UsersAPIContainer extends React.Component <UsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
           this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)

        })

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users onPageChanged={this.onPageChanged} users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow} totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}/>
        </>



    }

}

export type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers : (users: Array<UserType>) => void
    setCurrentPage:(pageNumber: number) => void
    setTotalUsersCount:(count:number)=>void
    toggleIsFetching:(isFetching:boolean) =>void
}
export type UsersType=mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {

        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow : (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount : (count:number) => {
            dispatch(setTotalUsersCountAC(count))
        },
        toggleIsFetching : (isFetching:boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)