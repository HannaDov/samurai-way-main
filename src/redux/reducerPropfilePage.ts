export type reducerProfilePageType = ReturnType<typeof addNewPostAC> | ReturnType<typeof updateNewPostTextAC>
export const addNewPostAC = (postText: string) => {
    return {
        type: "ADD-NEW-POST",
        postText: postText
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
let initialState = {
    post: [
        {id: 1, message: 'Hi? how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'I like this', likesCount: 25},
    ] as Array<postType>,
    newPostText: ""
}
export  type postType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateProfileType = typeof initialState
export const reducerProfilePage = (state: InitialStateProfileType = initialState, action: reducerProfilePageType) => {
    switch (action.type) {
        case "ADD-NEW-POST": {
            const newPost: {
                id: number
                message: string
                likesCount: number
            } = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state, post: [...state.post, newPost], newPostText: ''
            }

        }//{...state, post:state.post.push(newPost),newPostText:""};
        case "UPDATE-NEW-POST-TEXT": return {
            ...state,
           newPostText :action.newText

        }//{...state, newPostText:action.newText };
        default:
            return state;
    }
}




