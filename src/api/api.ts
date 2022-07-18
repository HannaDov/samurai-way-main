import axios from "axios";
import {UserType} from "../redux/reducerUsers";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL:`https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "e92b4ca3-1dc3-46d8-a402-cbdfeb963f9b"
        }
    }
)
type ResponseUsersType={
    items: Array<UserType>,
    totalCount: number,
    error: string
}
export const usersAPI={
    getUsers(currentPage: number, pageSize: number){
        return instance.get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {return response.data})}}