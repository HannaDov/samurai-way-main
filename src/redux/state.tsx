import {renderTree} from "../render";

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
    post: Array<postType>;
    messageForNewPost:string
}

export type DialogPageType = {
    dialogData: Array<dialogDataType>
    messageData: Array<messageDataType>

}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}
let state: RootStateType = {
    profilePage: {
        messageForNewPost:"",
        post: [
            {id: 1, message: 'Hi? how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'I like this', likesCount: 25},
        ]
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

        ]
    },
    sidebar: {}
}

export const addNewPost = (postText: string) => {

    const newPost: postType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.post.push(newPost);
    renderTree(state)
}


export default state;