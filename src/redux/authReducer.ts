export type reducerAuthType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: AuthDataType) =>
    (
    {
        type: 'SET_AUTH_USER_DATA', data
    } as const)


export type AuthDataType = {
    id: number,
    email: string,
    login: string
}
type initialAuthStateType = {
    data: AuthDataType
    isAuth: boolean
}


let initialState = {
    data: {
        id: 0,
        email: "",
        login: ""
    },
    isAuth: false,

}

//export type InitialStateAuthType = typeof initialState

export const authReducer = (state: initialAuthStateType = initialState, action: reducerAuthType): initialAuthStateType => {
    switch (action.type) {

        case "SET_AUTH_USER_DATA":

            return {...state, data:action.data, isAuth: true}

        default:
            return state;
    }
}




