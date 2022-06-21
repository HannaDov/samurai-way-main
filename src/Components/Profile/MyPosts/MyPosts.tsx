import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


type MyPostsType = {
    onPostChange: (text: string) => void
    addPost:(newPostText:string)=>void
    newPostText:string
    post: Array<{ id:number, message:string, likesCount:number }>

}
export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postElement = props.post.map(p =>
        <Post key={p.id} message={p.message} likes={p.likesCount}/>
    )


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value
        props.onPostChange(text)

    }
    const OnAddPost = () => {

        props.addPost(props.newPostText)
        //console.log('yo')
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
                    <button onClick={OnAddPost}>Add Post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postElement}
            </div>

        </div>

    )
}