import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
 import {DialogPageType} from "../../redux/state";


type DialogType={
    state:DialogPageType
}
export const Dialogs:React.FC<DialogType>=(props) => {

    let dialogsElement = props.state.dialogData.map(el=>

        <DialogItem  name={el.name} id={el.id}/>
    )


    let messageElement = props.state.messageData.map(el =>
        <Message message={el.message}/>)

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