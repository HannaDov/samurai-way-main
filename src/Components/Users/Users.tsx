import React from 'react';
import {
    UserType
} from "../../redux/reducerUsers";

import styles from './Users.module.css';

import UserPhoto from "../image/images.png"

export type UsersAPIType={
    totalUsersCount:number,
    pageSize:number,
    currentPage:number,
    onPageChanged:(pageNumber:number)=>void,
    users:Array<UserType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void

}
export const Users =(props:UsersAPIType)=> {

        let PagesCount = Math.ceil( props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= PagesCount; i++) pages.push(i);
        let newPages
        if (props.currentPage<=5) {
            newPages = pages.slice(0,10)
        } else {
            newPages=pages.slice(props.currentPage-5,props.currentPage+5)
        }
        return (
            <div>
                <div>
                    {newPages.map(el => {
                        return <span className={props.currentPage === el ? styles.selectedPage : ""}
                                     onClick={(e) => {props.onPageChanged(el)}}>{el}_</span>
                    })}

                </div>
                {props.users.map(el => <div key={el.id}>
            <span>
                    <div>
                        <img src={el.photos.small != null ? el.photos.small : UserPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(el.id)}>Follow</button>}
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