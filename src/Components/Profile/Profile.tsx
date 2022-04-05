import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFRnZ74gkvylB7jhhqlvOrUI3xOONxwCukA&usqp=CAU"/>
            </div>
            <div>
                ava+discription
            </div>

        <MyPosts/>
        </div>



)
}