import React, {ChangeEvent}  from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionTypes, postType} from "../../../redux/store";
import {addNewPostAC, updateNewPostTextAC} from "../../../redux/reducerPropfilePage";

type MyPostsType = {
    post: Array<postType>
   /* addNewPost: (postText: string) => void*/
    newPostText: string
    /*updateNewPostText: (newText: string) => void*/
    dispatch: (action: ActionTypes) => void
}
export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postElement = props.post.map(p =>
        <Post key={p.id} message={p.message} likes={p.likesCount}/>
    )


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value
        /*props.updateNewPostText(text)*/
        /*  props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText:text})*/

        props.dispatch(updateNewPostTextAC(text))

    }
    const addPost = () => {
        debugger
        /*props.addNewPost(props.newPostText);*/
        props.dispatch(addNewPostAC(props.newPostText))

    }

    return (

        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <hr/>
                    {props.post.map(p => <div key={p.id}><b>{p.message}</b></div>
                    )}
                    <hr/>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postElement}
            </div>

        </div>

    )
}