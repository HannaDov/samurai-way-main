export type reducerUsersType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPage = (currentPage: any) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId:number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const)

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
    portionsSize: 5,
    isFetching: false,
    FollowingInProgress:[] as Array<number>//array of users id
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
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching

            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state, FollowingInProgress: action.isFetching
                ? [...state.FollowingInProgress, action.userId]
                    : state.FollowingInProgress.filter(id => id != action.userId)


            }
        default:
            return state;
    }
}




