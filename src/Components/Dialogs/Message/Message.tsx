import React, {ChangeEvent} from 'react';
import classes from './Message.module.css';
import {mapDispatchToPropsType, mapStateToPropsType} from "../../forDelete/MessageContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {addNewMessageAC, messageDataType, updateNewMessageTextAC} from "../../../redux/reducerDialogPage";
import {Dispatch} from "redux";


/*
type MessageType = {
    addMessage:(newMessageText:string)=>void
    updateNewMessageText:(messageText:string)=>void
    messageData: Array<{id: number, message: string}>
    newMessageText: string

}*/

export const Message = () => {


    const newMessageText = useSelector<AppStateType, string>(state=>state.DialogPage.newMessageText)
    const messageData=useSelector<AppStateType, Array<messageDataType>>(state=>state.DialogPage.messageData)
    const dispatch=useDispatch<Dispatch>()

    const addMessage = () => {

        //props.addMessage(props.newMessageText)
            dispatch(addNewMessageAC(newMessageText))

    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.currentTarget.value
       // props.updateNewMessageText(messageText)
        dispatch(updateNewMessageTextAC(messageText))
    }
    return (
        <div className={classes.message}>
            <div>

                {messageData.map(el => <div key={el.id}><b>{el.message}</b></div>)}
                <textarea onChange={onMessageChange} value={newMessageText} placeholder={"Enter your text"}/>
                <button onClick={addMessage}>Add message</button>

            </div>

        </div>
    )
}

