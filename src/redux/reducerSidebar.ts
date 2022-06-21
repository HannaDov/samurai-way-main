import {ActionTypes, SidebarType} from "./store";
export type reducerSidebarType=any
/*export type reducerSidebarType=ReturnType<typeof > | ReturnType<typeof >*/
/*export const addNewMessageAC = (messageText: string) => {
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
}*/
let initialState ={};
export const reducerSidebar=(state= initialState, action:reducerSidebarType)=>{
return state

}




