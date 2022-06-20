import React, {ChangeEvent} from 'react';
import classes from './Message.module.css';
import {ActionTypes, messageDataType} from "../../../redux/store";
import {addNewMessageAC, updateNewMessageTextAC} from "../../../redux/reducerDialogPage"


type MessageType = {

    messageText: Array<messageDataType>
    /*addNewMessage: (messageText: string) => void*/
    /*message: string*/
    newMessageText: string
  /*  updateNewMessageText: (newMessage: string) => void*/
    dispatch: (action: ActionTypes) => void
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

               {/* {props.messageText.map(el =>
                    {
                        return
                        (<div key={el.id}><b>{el.message}</b></div>)
                    }

                )}*/}

                {props.messageText.map(el =><div key={el.id}><b>{el.message}</b></div>)}
                <textarea onChange={onMessageChange} value={props.newMessageText} placeholder={"Enter your text"}/>
                <button onClick={addMessage}>Add message</button>

            </div>

        </div>
    )
}

