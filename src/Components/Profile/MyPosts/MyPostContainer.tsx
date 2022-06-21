import React from 'react';

import {addNewPostAC, updateNewPostTextAC} from "../../../redux/reducerPropfilePage";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";
import {log} from "util";

type MyPostsContainerType = {
    store:ReduxStoreType

}
export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
let state=props.store.getState()
    console.log("state", state)
    const onPostChange = (text:string) => {

        props.store.dispatch(updateNewPostTextAC(text))

    }
    const addPost = () => {

        props.store.dispatch(addNewPostAC(state.ProfilePage.newPostText))

    }

    return (<MyPosts onPostChange={onPostChange} addPost={addPost} post={state.ProfilePage.post}
                     newPostText={state.ProfilePage.newPostText}/>)
}