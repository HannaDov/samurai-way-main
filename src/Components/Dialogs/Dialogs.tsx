import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import  {AppStateType} from "../../redux/redux-store";
import {useSelector} from "react-redux";
import {dialogDataType} from "../../redux/reducerDialogPage";
import {Message} from "./Message/Message";



export const Dialogs = () => {
let dialogData=useSelector<AppStateType, Array<dialogDataType>>(state=>state.DialogPage.dialogData)

    let dialogsElement = dialogData.map(el =>

        <DialogItem key={el.id} name={el.name} id={el.id}/>
    )



    let messageElement =<Message/>
  /*  messageText={props.store.getState().DialogPage.messageData}
    newMessageText={props.store.getState().DialogPage.newMessageText}*/

    //dispatch={props.store.dispatch.bind(props.store)}

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

