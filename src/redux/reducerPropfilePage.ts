import {ActionTypes, postType, ProfilePageType} from "./store";

export type reducerProfilePageType=ReturnType<typeof addNewPostAC> | ReturnType<typeof updateNewPostTextAC>
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
let initialState={
 post: [
  {id: 1, message: 'Hi? how are you?', likesCount: 12},
  {id: 2, message: 'It\'s my first post', likesCount: 11},
  {id: 3, message: 'I like this', likesCount: 25},
 ],
 newPostText: ""
}
export const reducerProfilePage= (state: ProfilePageType = initialState, action: ActionTypes)=>{
  switch (action.type){
  case "ADD-NEW-POST":const newPost: postType = {
   id: new Date().getTime(),
   message: action.postText,
   likesCount: 0
  }
   state.post.push(newPost);
  state.newPostText = '';
  return state;
  case "UPDATE-NEW-POST-TEXT":
  state.newPostText = action.newText;
   return state;
  default:
   return state;
   }
}




