import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes, DialogPageType, StoreType} from "../../redux/state";


type DialogType = {
    store: StoreType
    dialogPage: DialogPageType
    addNewMessage: (messageText: string) => void
    updateNewMessageText: (newMessage: string) => void
    dispatch: (action: ActionTypes) => void

}
export const Dialogs: React.FC<DialogType> = (props) => {

    let dialogsElement = props.dialogPage.dialogData.map(el =>

        <DialogItem key={el.id} name={el.name} id={el.id}/>
    )


    let messageElement = props.dialogPage.messageData.map(el =>
        <Message key={el.id}
                 message={el.message}
                 addNewMessage={props.store.addNewMessage.bind(props.store)}
                 messageText={props.dialogPage.messageData}
                 newMessageText={props.dialogPage.newMessageText}
                 updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                 dispatch={props.store.dispatch.bind(props.store)}
        />)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messageElement}


            </div>
        </div>
    )
}