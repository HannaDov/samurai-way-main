import React from 'react';
import {UserType} from "../../redux/reducerUsers";
import styles from './Users.module.css';
import UserPhoto from "../image/images.png";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {ResultTypeEnum} from "../../api/api";


export type UsersAPIType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<UserType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    toggleFollowingProgress:(isFetching:boolean, userId:number)=>void
    FollowingInProgress:Array<number>

}
export const Users = (props: UsersAPIType) => {

    let PagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= PagesCount; i++) pages.push(i);
    let newPages
    if (props.currentPage <= 5) {
        newPages = pages.slice(0, 10)
    } else {
        newPages = pages.slice(props.currentPage - 5, props.currentPage + 5)
    }
    return (
        <div>
            <div>
                {newPages.map(el => {
                    return <span className={props.currentPage === el ? styles.selectedPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(el)
                                 }}>{el}_</span>
                })}

            </div>
            {props.users.map(el => <div key={el.id}>
            <span>
                    <div>
                        <NavLink to={'./../profile/' + el.id}>
                            <img src={el.photos.small != null ? el.photos.small : UserPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>

                    </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.FollowingInProgress.some(id =>id ===el.id)} onClick={() =>{
                                props.toggleFollowingProgress(true, el.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                    withCredentials: true, headers: {
                                        "API-KEY": "e92b4ca3-1dc3-46d8-a402-cbdfeb963f9b"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === ResultTypeEnum.Success) {
                                        props.unfollow(el.id)
                                    }
                                    props.toggleFollowingProgress(false, el.id)
                                })
                            }}
                            >Unfollow</button>
                            : <button disabled={props.FollowingInProgress.some(id =>id ===el.id)}
                                onClick={() => {
                                    props.toggleFollowingProgress(true, el.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                        withCredentials: true, headers: {
                                            "API-KEY": "e92b4ca3-1dc3-46d8-a402-cbdfeb963f9b"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode ===ResultTypeEnum.Success) {
                                            props.follow(el.id)
                                        }
                                        props.toggleFollowingProgress(false, el.id)
                                    })
                                }
                                }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                </span>
            </div>)}

        </div>
    )

}

export default Users;