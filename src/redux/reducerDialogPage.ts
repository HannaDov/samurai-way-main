import {ActionTypes, DialogPageType, messageDataType} from "./store";

export type reducerDialogPageType=ReturnType<typeof addNewMessageAC> | ReturnType<typeof updateNewMessageTextAC>
export const addNewMessageAC = (messageText: string) => {
 return {
  type: "ADD-NEW-MESSAGE",
  messageText: messageText
 } as const
}
export const updateNewMessageTextAC=(newMessage:string)=>{
 return {
  type:"UPDATE-NEW-MESSAGE-TEXT",
  newMessage:newMessage

 }as const
}
let initialState={
 dialogData: [
  {id: 1, name: "Marina"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Olya"},
  {id: 4, name: "Timofey"},
  {id: 5, name: "Teya"},
  {id: 6, name: "Ivan"},

 ],
 messageData: [
  {id: 1, message: "Hi"},
  {id: 2, message: "How are you"},
  {id: 3, message: "Where are you"},
  {id: 4, message: "Yo"},
  {id: 5, message: "Yo"},
  {id: 6, message: "Yo"},

 ],
 newMessageText: ""
}
export const reducerDialogPage= (state=initialState, action: reducerDialogPageType)=>{
 switch (action.type){
  case "ADD-NEW-MESSAGE":
   const newMessage: messageDataType = {
    id: new Date().getTime(),
    message: action.messageText,
   }
   state.messageData.push(newMessage);
   state.newMessageText = '';
   return state;
  case "UPDATE-NEW-MESSAGE-TEXT":
   state.newMessageText =action. newMessage;
   return state;
  default:
   return state;
   }
}




