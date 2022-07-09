export type reducerProfilePageType = ReturnType<typeof addNewPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUsersProfile>
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
export const setUsersProfile = (profile: ProfileAPIType) => {
    return {
        type: "SET-USERS-PROFILE",
        profile
    } as const
}
let initialState = {
    post: [
        {id: 1, message: 'Hi? how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'I like this', likesCount: 25},
    ] as Array<postType>,
    newPostText: "",
    profile:{} as ProfileAPIType
}
export type ProfileAPIType = {
    photos: { small: string, large: string },
    aboutMe: string,
    contacts: contactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string
}
type contactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
type photosType ={
    small: string,
    large: string
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
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText

            }
        case "SET-USERS-PROFILE":
            return {
                ...state, profile: action.profile
            }

        default:
            return state;
    }
}




