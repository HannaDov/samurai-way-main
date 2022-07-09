import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileAPIType} from "../../redux/reducerPropfilePage";

 export type ProfileType= {
     profile:ProfileAPIType
}
export const Profile = (props:ProfileType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPosts/>

        </div>

    )
}