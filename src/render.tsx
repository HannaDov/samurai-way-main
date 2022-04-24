import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";






export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                appState={store._state}
                addNewPost={store.addNewPost}
                 updateNewPostText={store.updateNewPostText}
                 dispatch = {store.dispatch}
                 addNewMessage ={store.addNewMessage}
                 updateNewMessageText={store.updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}
