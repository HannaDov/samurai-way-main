import React from 'react';
import  classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <>

            <div className={classes.item}>
                My post
            </div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>

            </div>
            <Post messange={'Hi? how are you?'} likes={15}/>
            <Post messange={'It\'s my first post'} likes={10}/>
        </>

    )
}