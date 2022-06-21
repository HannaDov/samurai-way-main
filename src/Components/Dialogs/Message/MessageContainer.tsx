import React, {ChangeEvent} from 'react';
import classes from './Message.module.css';
import {ActionTypes, messageDataType} from "../../../redux/store";
import {addNewMessageAC, updateNewMessageTextAC} from "../../../redux/reducerDialogPage"
import {ReduxStoreType} from "../../../redux/redux-store";
import {MyPostsContainer} from "../../Profile/MyPosts/MyPostContainer";
import {Message} from "./Message";


type MessageContainerType = {
store:ReduxStoreType
    /*messageText: Array<messageDataType>
    newMessageText: string
    dispatch: (action: ActionTypes) => void*/
}

export const MessageContainer: React.FC<MessageContainerType> = (props) => {
let state=props.store.getState()

    const addMessage = (newMessageText:string) => {

        {
            props.store.dispatch(addNewMessageAC(newMessageText))
        }

    }
    const onMessageChange = (messageText:string) => {

        props.store.dispatch(updateNewMessageTextAC(messageText))
    }
    return (<Message  updateNewMessageText={onMessageChange} addMessage={addMessage} messageData={state.DialogPage.messageData}
                      newMessageText={state.DialogPage.newMessageText}/>

    )
}

