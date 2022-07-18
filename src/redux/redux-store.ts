import {combineReducers, legacy_createStore as createStore} from "redux";
import {reducerProfilePage} from "./reducerPropfilePage";
import {reducerDialogPage} from "./reducerDialogPage";
import {reducerSidebar} from "./reducerSidebar";
import {reducerUsers} from "./reducerUsers";
import {authReducer} from "./authReducer";
let rootReducer = combineReducers({
    ProfilePage:reducerProfilePage,
    DialogPage:reducerDialogPage,
    Sidebar:reducerSidebar,
    usersPage:reducerUsers,
    auth:authReducer
});

export type RootReducerType= typeof rootReducer
export type AppStateType=ReturnType<RootReducerType> //типизация стейта всего приложения !!!
export type ReduxStoreType = typeof store//типизация всего стора
let store=createStore(rootReducer);
export default store;
