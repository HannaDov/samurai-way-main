import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {postType} from "../../../redux/state";

type MyPostsType = {
    post: Array<postType>
}
export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postElement = props.post.map(p =>
        <Post message={p.message} likes={p.likesCount}/>
    )
   /* let newPostElement = React.createRef()
    let addPost = () => {
        let text =newPostElement.current.value
    }*/
    return (

        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea /*ref={newPostElement}*/></textarea>
                </div>
                <div>
                    <button /*onClick={addPost}*/>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>

    )
}