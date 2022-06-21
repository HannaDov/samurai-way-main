import React, {ChangeEvent} from 'react';
import classes from './Message.module.css';



type MessageType = {
    addMessage:(newMessageText:string)=>void
    updateNewMessageText:(messageText:string)=>void
    messageData: Array<{id: number, message: string}>
    newMessageText: string

}

export const Message: React.FC<MessageType> = (props) => {


    const addMessage = () => {

        props.addMessage(props.newMessageText)
            //props.dispatch(addNewMessageAC(props.newMessageText))

    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.currentTarget.value
        props.updateNewMessageText(messageText)
        //props.dispatch(updateNewMessageTextAC(messageText))
    }
    return (
        <div className={classes.message}>
            <div>

                {props.messageData.map(el => <div key={el.id}><b>{el.message}</b></div>)}
                <textarea onChange={onMessageChange} value={props.newMessageText} placeholder={"Enter your text"}/>
                <button onClick={addMessage}>Add message</button>

            </div>

        </div>
    )
}

