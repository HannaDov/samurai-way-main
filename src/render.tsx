import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export const renderTree = () => {


    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 //dispatch={store.dispatch.bind(store)}

            />
        </BrowserRouter>,
        document.getElementById('root'));
}
