import React from 'react';
import classes from './Message.module.css';
import {messageDataType} from "../../../redux/state";


type MessageType= {

    message: string
}

export const Message: React.FC<MessageType>= (props) => {
    return <div className={classes.message}>

        {props.message}</div>
}

