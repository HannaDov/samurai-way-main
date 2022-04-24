import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addNewPost, ProfilePageType} from '../../redux/state'


export type ProfileType={
    state: ProfilePageType
    addNewPost:(postText: string)=>void

}

export const Profile: React.FC < ProfileType>=(props) => {

    return (
        <div>
            <ProfileInfo/>

            <MyPosts post={props.state.post}  addNewPost={props.addNewPost} />
        </div>


    )
}