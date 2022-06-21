import {combineReducers, legacy_createStore as createStore} from "redux";
import {reducerProfilePage} from "./reducerPropfilePage";
import {reducerDialogPage} from "./reducerDialogPage";
import {reducerSidebar} from "./reducerSidebar";
let reducers = combineReducers({
    ProfilePage:reducerProfilePage,
    DialogPage:reducerDialogPage,
    Sidebar:reducerSidebar
});

export type RootReducerType= typeof reducers
export type AppStateType=ReturnType<RootReducerType> //типизация стейта
export type ReduxStoreType = typeof store//типизация всего стора
let store=createStore(reducers);
export default store;
