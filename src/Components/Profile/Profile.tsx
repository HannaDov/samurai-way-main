import React from 'react';

import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType, StoreType} from '../../redux/store'


export type ProfileType = {
    profilePage: ProfilePageType
   /* addNewPost: (postText: string) => void
    updateNewPostText: (newText: string) => void*/
    store: StoreType
    dispatch: (action: ActionTypes) => void

}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>

            <MyPosts post={props.profilePage.post}
                    /* addNewPost={props.store.addNewPost.bind(props.store)}*/
                     newPostText={props.profilePage.newPostText}
                    /* updateNewPostText={props.store.updateNewPostText.bind(props.store)}*/
                     dispatch={props.store.dispatch.bind(props.store)}
            />


        </div>

    )
}