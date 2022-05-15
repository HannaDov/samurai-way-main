
export type messageDataType = {
    id: number
    message: string

}
export type dialogDataType = {
    id: number
    name: string
}
export type postType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    post: Array<postType>

    newPostText: string
}

export type DialogPageType = {
    dialogData: Array<dialogDataType>
    messageData: Array<messageDataType>
    newMessageText: string

}
export type SidebarType = {
    friendsData: Array<friendsDataType>
}

type friendsDataType = {
    id: number
    name: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addNewPost: (postText: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
    addNewMessage: (messageText: string) => void
    updateNewMessageText: (newMessage: string) => void
}

export type ActionTypes = ReturnType<typeof addNewPostAC> | ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addNewMessageAC>| ReturnType<typeof updateNewMessageTextAC>

export const addNewPostAC = (postText: string) => {
    return {
        type: "ADD -NEW-POST",
        postText: postText
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
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
const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi? how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'I like this', likesCount: 25},
            ],
            newPostText: ""
        },
        dialogPage: {
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
        },
        sidebar: {
            friendsData: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Timofey"},
                {id: 3, name: "Teya"}
            ]
        }
    },
    updateNewPostText(newText: string) {

        this._state.profilePage.newPostText = newText;
        this._onChange();
    },
    addNewPost(postText: string) {

        const newPost: postType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.post.push(newPost);
        this._state.profilePage.newPostText = '';
        this._onChange();
    },
    addNewMessage(messageText: string) {
        const newMessage: messageDataType = {
            id: new Date().getTime(),
            message: messageText,

        }
        this._state.dialogPage.messageData.push(newMessage);
        this._state.dialogPage.newMessageText = '';
        this._onChange()
    },
    updateNewMessageText(newMessage: string) {

        this._state.dialogPage.newMessageText = newMessage;
        this._onChange()
    },
    _onChange() {
        console.log('hello')
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD -NEW-POST") {
            const newPost: postType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChange();

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {

            this._state.profilePage.newPostText = action.newText;
            this._onChange();
        } else if (action.type === "ADD-NEW-MESSAGE") {
            const newMessage: messageDataType = {
                id: new Date().getTime(),
                message: action.messageText,

            }
            this._state.dialogPage.messageData.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._onChange()
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT"){
            this._state.dialogPage.newMessageText =action. newMessage;
            this._onChange()
        }
    }

}


export default store;