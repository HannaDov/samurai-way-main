import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/reducerUsers";
import Users from "./Users";


export type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,

}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers : (users: Array<UserType>) => void
    setCurrentPage:(pageNumber: number) => void
    setTotalUsersCount:(count:number)=>void
}
export type UsersType=mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
}}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)