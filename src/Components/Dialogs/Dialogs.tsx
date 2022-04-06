import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

type DialogItemPropsType ={
    name: string
    id: string
}
const DialogItem = (props:DialogItemPropsType) => {
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
type MessagePropsType ={
    message:string
}
const Message =(props: MessagePropsType)=>{
    return  <div className={classes.message}>{props.message}</div>
}
export const Dialogs = (props:any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name="Marina" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Olya" id="3"/>
                <DialogItem name="Timofey" id="4"/>
                <DialogItem name="Teya" id="5"/>
                <DialogItem name="Ivan" id="6"/>
            </div>

            <div className={classes.messages}>
               <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Where are you?"/>
                <Message message="Yo!"/>

            </div>
        </div>
    )
}