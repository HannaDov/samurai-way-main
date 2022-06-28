export type reducerDialogPageType = ReturnType<typeof addNewMessageAC> | ReturnType<typeof updateNewMessageTextAC>
export const addNewMessageAC = (messageText: string) => {
    return {
        type: "ADD-NEW-MESSAGE",
        messageText: messageText
    } as const
}
export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage

    } as const
}
let initialState = {
    dialogData: [
        {id: 1, name: "Marina"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Olya"},
        {id: 4, name: "Timofey"},
        {id: 5, name: "Teya"},
        {id: 6, name: "Ivan"},

    ] as Array<dialogDataType>,
    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Where are you"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},

    ] as Array<messageDataType>,
    newMessageText: ""
}
export type messageDataType = {
    id: number
    message: string
}
export type dialogDataType = {
    id: number
    name: string
}

export type InitialStateDialogType = typeof initialState
export const reducerDialogPage = (state: InitialStateDialogType = initialState, action: reducerDialogPageType): InitialStateDialogType => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const newMessage: {
                id: number,
                message: string
            } = {
                id: new Date().getTime(),
                message: action.messageText,
            }
            return {
                ...state, newMessageText: '', messageData: [...state.messageData, newMessage]
            }
        /* let stateCopy={...state}
         stateCopy.messageData=[...state.messageData]
         stateCopy.messageData.push(newMessage);
         stateCopy.newMessageText = '';
         return stateCopy*/
        case "UPDATE-NEW-MESSAGE-TEXT":
        return {...state,newMessageText:action.newMessage
           // let stateCopy = {...state}
           // stateCopy.newMessageText = action.newMessage;
           // return stateCopy
        }
            ;
        default:
            return state;
    }
}




