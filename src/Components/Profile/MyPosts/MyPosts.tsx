import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {AppStateType} from "../../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";

import {addNewPostAC, postType, updateNewPostTextAC} from "../../../redux/reducerPropfilePage";
import {Dispatch} from "redux";

/*
type MyPostsType = {
    onPostChange: (text: string) => void
    addPost:(newPostText:string)=>void
    newPostText:string
    post: Array<{ id:number, message:string, likesCount:number }>

}*/
export const MyPosts = () => {
    let post = useSelector<AppStateType, Array<postType>>(state => state.ProfilePage.post)
    let newPostText=useSelector<AppStateType, string>(state => state.ProfilePage.newPostText)
    const dispatch = useDispatch<Dispatch>()
    let postElement = post.map(p =>
        <Post key={p.id} message={p.message} likes={p.likesCount}/>
    )

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value
        dispatch(updateNewPostTextAC(text))

    }
    const OnAddPost = () => {
        dispatch(addNewPostAC(newPostText))
        //console.log('yo')
    }
    return (

        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <hr/>
                    {post.map(p => <div key={p.id}><b>{p.message}</b></div>
                    )}
                    <hr/>
                    <textarea onChange={onPostChange} value={newPostText}/>
                </div>
                <div>
                    <button onClick={OnAddPost}>Add Post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postElement}
            </div>

        </div>

    )
}