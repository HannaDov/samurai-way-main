import React from 'react';
import classes from './Message.module.css';
import {messageDataType} from "../../../redux/state";


type MessageType = {

    message: string
}

export const Message: React.FC<MessageType> = (props) => {
    let newMessageElement=React.createRef<HTMLTextAreaElement>();
    const addMessage=()=>{
        alert (newMessageElement.current?.value)
    }
    return (
        <div className={classes.message}>
            <div>
            <textarea ref={newMessageElement}>
                 {props.message}
            </textarea>
                {/*</div>
        {props.message}</div>*/}
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

