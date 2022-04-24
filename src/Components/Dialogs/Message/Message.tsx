import React, {ChangeEvent} from 'react';
import classes from './Message.module.css';
import {ActionTypes, messageDataType, addNewMessageAC,updateNewMessageTextAC} from "../../../redux/state";



type MessageType = {

    messageText: Array<messageDataType>
    addNewMessage: (messageText: string) => void
    message: string
    newMessageText: string
    updateNewMessageText: (newMessage: string) => void
    dispatch:(action:ActionTypes)=>void
}

export const Message: React.FC<MessageType> = (props) => {


    const addMessage = () => {

        {
            props.dispatch(addNewMessageAC(props.newMessageText))
        }

    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.currentTarget.value
        props.dispatch(updateNewMessageTextAC(messageText))
    }
    return (
        <div className={classes.message}>
            <div>
            <textarea onChange={onMessageChange} value={props.newMessageText} placeholder={"Enter your text"}>
                {/*{props.messageText.map(el =>
                    {
                        return
                        (<div key={el.id}><b>{el.message}</b></div>)
                    }

                )}*/}

            </textarea>

        {props.message}
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

