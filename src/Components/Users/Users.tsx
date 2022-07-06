import React from 'react';
import {
    UserType
} from "../../redux/reducerUsers";
import {AppStateType} from "../../redux/redux-store";
import styles from './Users.module.css';
import axios from "axios";
import UserPhoto from "../image/images.png"
import {UsersType} from "./UsersContainer";

export type ResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}

class Users extends React.Component <UsersType> {
   componentDidMount() {
                axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)

            })

        }
onPageChanged =(pageNumber:number) =>{
    this.props.setCurrentPage(pageNumber);
    axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)

    })

}
    render() {
        let PagesCount = Math.ceil(this. props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= PagesCount; i++) pages.push(i);
        let newPages
        if (this.props.currentPage<=5) {
            newPages = pages.slice(0,10)
        } else {
            newPages=pages.slice(this.props.currentPage-5,this.props.currentPage+5)
        }
        return (
            <div>
<div>
    {newPages.map(el => {
        return <span className={this.props.currentPage === el ? styles.selectedPage : ""}
                     onClick={(e) => {this.onPageChanged(el)}}>{el}_</span>
    })}

</div>
                {this.props.users.map(el => <div key={el.id}>
            <span>
                    <div>
                        <img src={el.photos.small != null ? el.photos.small : UserPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(el.id)}>Follow</button>}
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

}

export default Users;
/*
export const Users = (props: UsersType) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
                props.setUsers(response.data.items)

            })

        }
    }


    return <div>
        <button onClick={getUsers}>Get Users</button>
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

}

*/
