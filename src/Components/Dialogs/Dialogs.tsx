import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {ReduxStoreType} from "../../redux/redux-store";
import {MessageContainer} from "./Message/MessageContainer";


type DialogType = {
    store: ReduxStoreType

}
export const Dialogs: React.FC<DialogType> = (props) => {

    let dialogsElement = props.store.getState().DialogPage.dialogData.map(el =>

        <DialogItem key={el.id} name={el.name} id={el.id}/>
    )



    let messageElement =<MessageContainer store={props.store}

  /*  messageText={props.store.getState().DialogPage.messageData}
    newMessageText={props.store.getState().DialogPage.newMessageText}*/

    //dispatch={props.store.dispatch.bind(props.store)}
    />
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

