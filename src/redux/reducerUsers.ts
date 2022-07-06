export type reducerUsersType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC = (currentPage: any) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', count:totalCount} as const)

export type UserType = {
    id: number,
    photos: { small: string, large: string },
    followed: boolean,
    name: string,
    status: string,
    /* location: LocationType*/
}
export type  LocationType = {
    country: string, city: string
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    portionsSize: 5
}

export type InitialStateUsersType = typeof initialState
export const reducerUsers = (state: InitialStateUsersType = initialState, action: reducerUsersType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case "SET_USERS":
            return {
                ...state, users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.count
            }
        default:
            return state;
    }
}




