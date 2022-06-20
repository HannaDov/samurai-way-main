import store from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export const renderTree = () => {

  /*  const BrowserRouter = require("react-router-dom").BrowserRouter*/
    ReactDOM.render(

        <BrowserRouter>
            <App store={store}
                 dispatch = {store.dispatch.bind(store)}
             /*   appState={store._state}
                addNewPost={store.addNewPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}*/

                 /*addNewMessage ={store.addNewMessage.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}
*/
            />
        </BrowserRouter>,
        document.getElementById('root'));
}
