import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (

        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post messange={'Hi? how are you?'} likes={15}/>
                <Post messange={'It\'s my first post'} likes={10}/>
            </div>
        </div>

    )
}