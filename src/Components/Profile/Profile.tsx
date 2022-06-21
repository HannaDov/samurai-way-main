import React from 'react';

import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ReduxStoreType} from "../../redux/redux-store";


export type ProfileType = {
   // profilePage: ProfilePageType
    store: ReduxStoreType
    //dispatch: (action: ActionTypes) => void

}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>

            <MyPostsContainer store={props.store}/>



        </div>

    )
}